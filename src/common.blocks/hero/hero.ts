import gsap from 'gsap'
import { SplitText } from 'gsap/all'

document.fonts.ready.then(() => {
  const heroTitleSplit = new SplitText('.hero-title', {
    type: 'chars, words',
  })

  gsap.from(heroTitleSplit.chars, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
  })

  const heroTextSplit = new SplitText(
    ['.hero-recipe > *', '.hero-details > *'],
    {
      type: 'lines',
    },
  )

  gsap.from(heroTextSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to('.leaf-right', { y: 200 }, 0)
    .to('.leaf-left', { y: -200 }, 0)
    .to('.arrow', { y: 100 }, 0)
})
