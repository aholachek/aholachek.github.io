import anime from 'animejs'

export default function animateInList(containerEl, delay = 0) {
  setTimeout(() => {
    anime({
      targets: containerEl.children,
      easing: 'easeOutExpo',
      opacity: [0, 1],
      delay: (x, i) => i * 250,
      duration: 1000,
    })
  }, delay)
}
