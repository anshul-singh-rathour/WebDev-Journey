// use for animation
//.to use to made animation from initial position to final

// gsap.to("#box1", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

//.from use to make from the specified postion to come back to position according to html div

// gsap.from("#box2", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tl = gsap.timeline();
tl.to("#box1", {
  x: 1000,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 2,
  //   delay: 1,
});

tl.to("#box3", {
  x: 1000,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  duration: 2,
  //   delay: 3,
});