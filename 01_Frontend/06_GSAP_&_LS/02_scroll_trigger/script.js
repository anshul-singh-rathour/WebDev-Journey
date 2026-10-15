gsap.from("#page1 .circle", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});
gsap.from("#page2 .circle", {
  scale: 0,
  duration: 1,
  rotate: 360,
  //   scrollTrigger: "#page2 .circle",
  scrollTrigger: {
    trigger: "#page2 .circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 20%",
    scrub: true,
  },
});