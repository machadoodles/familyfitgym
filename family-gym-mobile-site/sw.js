const CACHE_NAME = "familyfit-gym-v5";
const LOCAL_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=5",
  "./script.js?v=5",
  "./manifest.webmanifest",
  "./assets/familyfit-icon.jpeg",
  "./assets/familyfit-mark-crop.jpeg",
  "./assets/familyfit-wordmark-crop.jpeg",
  "./assets/familyfit-hours-plans.jpeg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(LOCAL_ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
