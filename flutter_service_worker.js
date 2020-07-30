'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2a934a0b0ca88a023e81031037561c75",
"assets/assets/flares/chatting.flr": "ea2c7d0a5d50919313d93bb25620f721",
"assets/assets/flares/Empty.flr": "712c561bd37f090e1e4a0753b9e9fa8b",
"assets/assets/flares/Teddy-Playground.flr": "1065387c235b84dd09bd4171f576829e",
"assets/assets/flares/weather_02d_2.flr": "42718af85feb00bea8caafba6bafb6df",
"assets/assets/fonts/dateFont.ttf": "34400c9c9509ce5cab304f662ea00639",
"assets/assets/fonts/mainFont.ttf": "7f2612b2bcc9c0f1bd540bb10c78519b",
"assets/assets/iconFonts/iconfont.ttf": "c9b140c2a0e243bfb06d6473e4499fc3",
"assets/assets/images/230627.jpg": "d97cd69436b6c08428bf3c2f132241ec",
"assets/assets/images/232478.jpg": "7737f11d615cf38e5b8cf9344938cfac",
"assets/assets/images/232615.jpg": "bcd18312a1fb27320c5e3e313679f045",
"assets/assets/images/237469.jpg": "cddaf2c2f8b27e6b395aecd272dcd7cc",
"assets/assets/images/247178.jpg": "a9a9fd60452ea6b4fac41d385753adf3",
"assets/assets/images/265066.jpg": "45a892a9e4628f6fffd60bb656856197",
"assets/assets/images/266442.jpg": "f72559979aa8a25cc4d86a2f74915cdf",
"assets/assets/images/266588.jpg": "521cef0c95ea17bcfeadc42846d1f684",
"assets/assets/images/267194.jpg": "69570a81058e8eae2a8d818f42e77bc1",
"assets/assets/images/267415.jpg": "d5676a01da5be47db5830188f3896e35",
"assets/assets/images/268370.jpg": "63240c41e75875a91c9c6ad8f712e58e",
"assets/assets/images/270216.jpg": "5e3118be91657223b5dc746b52c3d37a",
"assets/assets/images/270653.jpg": "d5265f9425a9f8f06376996b5852a59c",
"assets/assets/images/270926.jpg": "95996c07e3e99abbf1cd72e118684dfd",
"assets/assets/images/271452.jpg": "5d292aca10ebfe1e17b8e370acebeecb",
"assets/assets/images/273259.jpg": "6dcf1e0fe1a907273711014e305fa631",
"assets/assets/images/288868.jpg": "512af9c6b7db90e5ebe1dcf52e6a8db1",
"assets/assets/images/289837.jpg": "feffb1634b7085246c6adc6967517135",
"assets/assets/images/297222.jpg": "57dc515e29bab5b17ca55ba642b834e2",
"assets/assets/images/299100.jpg": "906317c6172d20e3a0f19f8512f711f5",
"assets/assets/images/299471.jpg": "e24a4472de77dc70a540f6bcbc8fe32d",
"assets/assets/images/299940.jpg": "907a9f842744be1931674e1def2d81e3",
"assets/assets/images/300142.jpg": "f05d0070088785fcef5b2cc7ac1ca645",
"assets/assets/images/303056.jpg": "e7ab25d057bb5c48bcbc16e3a0bb6b53",
"assets/assets/images/304450.jpg": "68615c214814fb0b8df046843a6e5cb4",
"assets/assets/images/323418.jpg": "2aba98d4e71f60034e8f127b2c214209",
"assets/assets/images/329286.jpg": "d65d9f35064cc71abbc9fa4da21b1a4f",
"assets/assets/images/base/toleft.png": "d4986c693c74d099f31e5b68c114b503",
"assets/assets/images/bg.jpg": "c27cc3ec384e659e7333da8ca8fd1296",
"assets/assets/images/cili.png": "e645a960d7923da10f93a2ae1a26c8a5",
"assets/assets/images/forest.jpg": "f987ccb8b871c8bc0ef7be1b504d6559",
"assets/assets/images/head.jpg": "c6d7c644da5452c777ec283f6fba7069",
"assets/assets/images/ic_launcher.png": "c976e20ebcda2b54dda6a758c35a04aa",
"assets/assets/images/john.png": "a88ef0e9baa07f4af532a3517dd2df1b",
"assets/assets/images/jory.png": "173af87187bf93473fa4a34b21d90d79",
"assets/assets/images/lili.png": "0c1b361709abf196b4a7230ee747cea3",
"assets/assets/images/logo.jpg": "214be34156d99bdb35918ab7692ef148",
"assets/assets/images/monday.jpg": "033368399f96f0e32b588e81e09baa91",
"assets/assets/images/pink.jpg": "928a676df71168fdd5ec903140e0a5df",
"assets/assets/images/qy.png": "1bd5a4f6854e87865f234db3e61174e5",
"assets/assets/images/sea1.jpg": "9b0e3b6ff5407d3be926b1edb7f2a671",
"assets/assets/images/sun.jpg": "bbd57bd076deae7b252be4c2afc2c4ce",
"assets/assets/images/sunflower.jpg": "d3af270a84968234c383ca9ac544a60c",
"assets/assets/images/taskCardBg.png": "975e33ed05a144e42b7422fe88376b92",
"assets/assets/images/tom.png": "505e44bd20c63c4d92192511ef4271ee",
"assets/assets/images/top-background.png": "1290d529c184e3a6b260c1579b6d6f7a",
"assets/assets/images/tuesday.jpg": "63b4858d7956e7050d0ebf9715c3a805",
"assets/FontManifest.json": "fe867e5987fb3bf5a3b4cce25bd07722",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "b4d6b0e6e62cadea7f20c6c0c32fd91d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7f37c49140115640070d27eaf12456a6",
"/": "7f37c49140115640070d27eaf12456a6",
"main.dart.js": "b98732d4e757c524e18e4b029a0bb71c",
"manifest.json": "9ab3a36847a5a48b92bbc5519fe7e6d4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
