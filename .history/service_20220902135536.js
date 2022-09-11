self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./index.html", "./img/logo192.png"]);
        })
    );
});
