export const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/cashOnlyServiceWorker.ts')
        .catch((error: string) => {
          console.error('Ошибка при регистрации service worker: ', error)
        })
    })
  }
}
