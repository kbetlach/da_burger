const FILES_TO_CACHE = [
    "/",
    "/manifest.webmanifest",
    "/assets/css/burger_style.css",
    "/assets/img/burger.png",
    "/assets/js/burger.js",
    "../config/connection.js",
    "../config/orm.js",
    "../controllers/burger_controller.js",
    "../db/burger_seeds.sql",
    "../db/burger_schema.sql",
    "../models/burger.js",
    "../server.js"
  ];

  const CACHE_NAME = "static-cache-v2";
  const DATA_CACHE_NAME = "data-cache-v1"
  
  //installation
  self.addEventListener("install", event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
        .then(self.skipWaiting())
    );
  });
  
  // activation
  self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });
  
  // fetching
  self.addEventListener("fetch", function(evt) {
    evt.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(evt.request).then(response => {
          return response || fetch(evt.request);
        });
      })
    );
  });