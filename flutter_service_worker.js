'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b35bbbc16ca0c264e812ccb1d91ec6a5",
"index.html": "f70020758b281db814d7665e43c94bcd",
"/": "f70020758b281db814d7665e43c94bcd",
"main.dart.js": "e59a6cd0ad0773118927aae9beb6056b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7b936c6d7c2f7ca0cdf542661bb74552",
".git/REBASE_HEAD": "0f9085f113a945c451c462586752045e",
".git/ORIG_HEAD": "0f9085f113a945c451c462586752045e",
".git/config": "626656bdb9bc15f6472287136154ebb8",
".git/objects/66/8487bfc2a675079a8676ece7d6c3df7e41b5a0": "e4e3a76497d920b28974a0ed5219cb4d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/32/c601756f44840fae9ad0e237ce4240cfedbf7a": "d1239563f6277f8eaf822614885f147e",
".git/objects/32/277a028edd04ee9ac2555faa14540790839c73": "818c2a83f24468f35d18126aacd3fd64",
".git/objects/67/83e7baf26e7f5d8f38e31d3ac9dea824c9fd33": "b79641c45965b207bafcd9244c490c2b",
".git/objects/0b/c4e21f137ee0f55149e1cbce543c5b78496b1c": "0471f5911e3455cbc31588cfe06cd893",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/5a/fc103139c588d59dbaa17c1f099c1fa5ec63fa": "5afb62836c60dbec991bdc78768048bb",
".git/objects/33/6a208e94e9e81d6bc5fd663ccdfbbd9fac4097": "81ffef260c7a13dbd448d6efe2b6377c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/af821deeb5816acb5bb69b19d10037ca35f26e": "169eb17451528f6efed3c1dc2ccbf144",
".git/objects/b4/274ba86aadd3db9712885e0fbc52b9fce33da3": "b0b286e0b03bef2320a880d105a21834",
".git/objects/bd/70b674d9e3438feb7d67b8f1c776de67027717": "7217c85f34ab0b95b3c7d09be7a3c74b",
".git/objects/d1/6c622fc890a7fe91b94517d8f7581dd611c639": "de76dfd7ce08c673f8659ac56ebf5938",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/05e97a21f97d28773db939fbcf8813d8e143d0": "377130cc5ba82f8f53149eb919a7ef0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/53/57dda20da239b0e3d9da445717d20e1840d109": "be57972ee2ed69eb166655fa9ebb63ad",
".git/objects/3f/f1ecce0d23e8d1c1c7341e365e539697fae733": "a8a93ac9acfd94a252a39c40692a1a3d",
".git/objects/5b/05d353598de439996a111aebd310450b4005c4": "f1428642cddfaf39092712394d06354f",
".git/objects/63/10331f927e0568f2082f3a53fd84eaf871387c": "02862259a302b90515fd1ebc3bfbd4da",
".git/objects/d3/40a61e0fbbe001aec9b138b90e713a97a5d69a": "1742eb8c6bbcd8872cc2991ec9fc1267",
".git/objects/d3/19cce63eaa1ce1a31587b1705f3cf4a4de3b4a": "61c1b52836ff83675d63ec61fa7adc6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/1bf9eafd35287fb60d7dbf7800674d7846514e": "fbf2fd215bc92f1e811bae45cca7330e",
".git/objects/b8/6a52435426c00991d654c041aaf3e9f3034361": "e1b8e8f4bb76d4d6da0d64fd6de37e9f",
".git/objects/d5/0d1e5851311c903e4c338523a8a6cc1218e915": "180f016e8b67db3802e594359e94a095",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e58f53c110eb3881afce6d402178b1e3ef157f": "50369cbaeb0a6de34febe9c35eb94d3a",
".git/objects/db/12ac1f71d9ba35f4e9189be2155d3796b81125": "f234e3387f59a4e9b018369303bdf4e3",
".git/objects/de/27196255ff2859e30b71b08592929e87426637": "b9912bf8254ef9254ee796dcf444c5dc",
".git/objects/a6/8212c649fb362311ac01caf29a9a08a9fcfa19": "80021f215641de682be0913843bc24e0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/7687446c413ee9dd5aba8baf4a4b4f40abccf5": "59dd738972b40423bedc08b10ebccf50",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/388baab0560ba07645828f35b9fd07c831372f": "271cc7a6613b5d2628dc90bd06d317dc",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/0815cd8c64b0a245ec780eb8d21867509155b5": "ceece04122f357c0586f02c120ac8ba5",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/70/585c0e46e1f7f4a987d08a85449ac34af049aa": "df896e8d12b7555a13f201698d38a017",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/28a83b308105b382e030141a8e53bb2c1015d2": "bbf261054d19dd5df69a366d74d72333",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/22/9d6e49b7bc843e52874a71af3ddf84496d93cc": "de211eb95fafb98622e6085e7e3d4ce8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ed5b7f08277ad15e727c93b6796bd2b",
".git/logs/refs/heads/main": "fed0c1be7646c970c1369178af08032f",
".git/logs/refs/remotes/origin/HEAD": "489cb3453390446825a6d6e96de76fb5",
".git/logs/refs/remotes/origin/main": "c5a4bd0d8f90833acb80fdf8a1e05dd2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "60862fafdbf935fbf32f6e564be0e795",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "60862fafdbf935fbf32f6e564be0e795",
".git/index": "dd339b52f73593cd5208993d6e4e46ae",
".git/COMMIT_EDITMSG": "cfe3d9db94fdf899e39dec22ac103d39",
".git/FETCH_HEAD": "88175c0adcc5e104df667899f9f762eb",
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
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
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
    .then((cache) =>  {
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
