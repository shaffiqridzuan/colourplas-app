// Minimal service worker. Its only job is to exist and control the page,
// which is what Chrome checks for before treating this as a real
// installable PWA (and using the manifest icon instead of a generic one).
// It does not cache or intercept anything — the app inside the iframe
// still loads normally from Google every time.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // Pass every request straight through to the network.
  event.respondWith(fetch(event.request));
});
