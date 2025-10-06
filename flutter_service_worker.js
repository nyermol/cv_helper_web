'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
  "version.json": "b35bbbc16ca0c264e812ccb1d91ec6a5",
  "index.html": "94ea0f0bc29779a4a26e4ed5a603257c",
  "/": "94ea0f0bc29779a4a26e4ed5a603257c",
  "main.dart.js": "a220002fcd22781e9ef1d5e4a6096505",
  "flutter.js": "c71a09214cb6f5f8996a531350400a9a",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "manifest.json": "7b936c6d7c2f7ca0cdf542661bb74552",
  "assets/AssetManifest.json": "a973b9cc8c8c843f3ea44e81515c08c5",
  "assets/NOTICES": "76970c48abe781e8333059b22dbaca68",
  "assets/FontManifest.json": "0619c776a0c18f52004bffe6fce80ada",
  "assets/AssetManifest.bin.json": "9c3096c15148d181705c7b78ee19d4d8",
  "assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
  "assets/AssetManifest.bin": "73bb7f96b4108e99156183d9cf3761e4",
  "assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
  "assets/assets/fonts/Arial-Regular.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
  "assets/assets/fonts/Arial-Bold.ttf": "ac8ce60bf9ef976a52176e90335cab62",
  "assets/assets/fonts/Arial-Italic.ttf": "b94c4d211e303045e15c8938d869bf61",
  "canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
  "canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
  "canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
  "canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
  "canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
  "canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
  "canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
  "canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
  "canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
  "canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"
};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
  "index.html",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
