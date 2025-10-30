import gsap from 'gsap'

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.header',
    start: 'center top',
    scrub: 1,
  },
})

tl.fromTo(
  '.header',
  {
    backgroundColor: 'transparent',
  },
  {
    backgroundColor: '#00000050',
    backdropFilter: 'blur(10px)',
    ease: 'power1.inOut',
  },
)
