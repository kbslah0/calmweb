const CACHE = 'calm-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll([
      '/',
      '/products.html',
      '/css/style.css',
      '/js/main.js',
      '/assets/logo.png',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Teko:wght@400;500;600;700&display=swap'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request).then((res) => {
      const clone = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match('/')))
  );
});
