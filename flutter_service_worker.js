'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d77687cbdcb336d6f73bbf416d1ddb7c",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/love.jpg": "c8926216ab3daa1b2278544fdfc946d2",
"assets/LICENSE": "37c5296e994db8ed0f378067eef98f42",
"index.html": "5d565d62a50cec69f025bf09215cc396",
"/": "5d565d62a50cec69f025bf09215cc396",
"main.dart.js": "5eab39825b56b00043e04afce7038946"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
