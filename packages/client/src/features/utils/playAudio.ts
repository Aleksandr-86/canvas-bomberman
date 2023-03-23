export const playAudio = async (context: AudioContext, url: string) => {
  const audioSource = context.createBufferSource()
  const audioBuffer = await fetch(url)
    .then(res => res.arrayBuffer())
    .then(ArrayBuffer => context.decodeAudioData(ArrayBuffer))

  audioSource.buffer = audioBuffer
  audioSource.connect(context.destination)
  audioSource.start()

  return new Promise<void>(resolve => {
    audioSource.addEventListener('ended', () => resolve())
  })
}
