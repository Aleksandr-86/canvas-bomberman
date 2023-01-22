export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.ts')
        .then(registration => {
          console.log(
            'Регистрация service worker прошла успешно:',
            registration.scope
          )
        })
        .catch((error: string) => {
          console.log('Ошибка при регистрации service worker: ', error)
        })
    })
  }
}
