const filesToCache = [
	"MiniPiano.htm",
	"MiniPiano.json",
	"MiniPiano.png",
	"MiniPianoFavIcon_16x16.png",
	"MiniPianoFavIcon_192x192.png",
	"MiniPianoFavIcon_512x512.png",
	"MiniPianoGame.htm",
	"MiniPianoGame.js"
];

const staticCacheName = "minipiano-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});