importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const cacheExpiration = new workbox.expiration.Plugin({
  maxAgeSeconds: 7 * 24 * 60 * 60
});

workbox.routing.registerRoute(
  /https:\/\/api.jikan.moe\/.*/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "api",
    plugins: [cacheExpiration]
  })
);

workbox.routing.registerRoute(
  /https:\/\/myanimelist.cdn-dena.com\/r\/100x140\/images.*/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "images",
    plugins: [cacheExpiration]
  })
);
