import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const aboutTitleSplit = new SplitText('.about-title', {
  type: 'lines',
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top center',
  },
})

tl.from(aboutTitleSplit.lines, {
  opacity: 0,
  yPercent: 100,
  duration: 1.8,
  ease: 'expo.out',
  stagger: 0.06,
})

tl.from(
  '.about-card',
  {
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
    stagger: 0.04,
  },
  '-=0.5',
)
