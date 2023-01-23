const CACHE_NAME = 'bomberman-cache-v1'

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    // Пытаемся найти ответ на такой запрос в кеше
    caches.match(event.request).then(response => {
      // Если ответ найден, выдаём его
      if (response) {
        return response
      }

      const fetchRequest = event.request.clone()
      // В противном случае делаем запрос на сервер

      return (
        fetch(fetchRequest)
          // Можно задавать дополнительные параметры запроса, если ответ вернулся некорректный.
          .then(response => {
            // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш
            if (
              !response ||
              response.status !== 200 ||
              response.type !== 'basic'
            ) {
              return response
            }

            const responseToCache = response.clone()
            // Получаем доступ к кешу по CACHE_NAME

            if (event.request.url.startsWith('http')) {
              caches.open(CACHE_NAME).then(cache => {
                // Записываем в кеш ответ, используя в качестве ключа запрос
                cache.put(event.request, responseToCache)
              })
            }

            // Отдаём в основной поток ответ
            return response
          })
      )
    })
  )
})
