self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("word-trainer").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/app.js"
            ])
        })
    )
})}