type ExitFullscreen = typeof document.exitFullscreen
type RequestFullscreen = typeof document.documentElement.requestFullscreen

declare global {
  interface Document {
    webkitExitFullscreen: ExitFullscreen
    mozCancelFullScreen: ExitFullscreen
    msExitFullscreen: ExitFullscreen
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen
    mozRequestFullScreen: RequestFullscreen
    msRequestFullscreen: RequestFullscreen
  }
}

export const toggleFullScreen = <T extends HTMLElement>(element: T) => {
  if (!document.fullscreenElement) {
    element.requestFullscreen() ||
      element.mozRequestFullScreen() ||
      element.webkitRequestFullscreen() ||
      element.msRequestFullscreen()
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
