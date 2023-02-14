export const setSoundBomb = () => {
  const context = new window.AudioContext()
  const oscillator = context.createOscillator()
  oscillator.type = 'sine'
  oscillator.frequency.value = 440
  oscillator.connect(context.destination)
  oscillator.start()
  const gain = context.createGain()
  oscillator.connect(gain)
  gain.connect(context.destination)
  const now = context.currentTime
  gain.gain.setValueAtTime(1, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)
  oscillator.start(now)
  oscillator.stop(now + 1)
}
