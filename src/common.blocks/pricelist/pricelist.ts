import gsap from 'gsap'

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.pricelist',
    start: 'top center',
    end: '75% center',
    scrub: true,
  },
})

tl.from('.price-leaf-left', {
  x: -100,
  y: 100,
})
tl.from(
  '.price-leaf-right',
  {
    x: 100,
    y: 100,
  },
  '<',
)
