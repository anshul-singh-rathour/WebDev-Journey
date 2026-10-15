const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  const tl = gsap.timeline();

  tl.from("#nav h3", {
    y: -70,
    opacity: 0,
    delay: 0.4,
    duration: 0.6,
    stagger: 0.2,
  });

  tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
  });

  tl.from("img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
  });
});

mm.add("(max-width: 768px)", () => {
  const tl = gsap.timeline();

  tl.from("#nav h3", {
    y: -30,
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
    stagger: 0.1,
  });

  tl.from("#main h1", {
    x: -150,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

  tl.from("img", {
    x: 50,
    rotate: 20,
    opacity: 0,
    duration: 0.5,
  });
});