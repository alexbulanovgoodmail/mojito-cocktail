import gsap from 'gsap'

const video = document.querySelector<HTMLVideoElement>('.cocktail-video')

if (video) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cocktail',
      endTrigger: '.pricelist',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: true,
    },
  })

  tl.to(video, {
    currentTime: video.duration,
    duration: 1,
    ease: 'none',
  })
}
