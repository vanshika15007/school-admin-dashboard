// Basic service worker for PWA and push notifications
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // You can add custom caching logic here if needed
});

// Listen for push events
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.notification?.title || 'Notification';
  const options = {
    body: data.notification?.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
  };
  event.waitUntil(self.registration.showNotification(title, options));
}); 