function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.

  ScrollTrigger.refresh();
}

function textamker() {
  // let h1text = document.querySelector("#firsth1").textContent;
  // let splitted = h1text.split("");
  // let clutter = "";
  // splitted.forEach((elem) => {
  //   clutter += `<span>${elem}</span>`;
  // });
  // document.querySelector("#firsth1").innerHTML = clutter;
  let allh1 = document.querySelectorAll("#page2 h1");
  allh1.forEach((elem) => {
    let clutter = "";
    let textcon = elem.textContent;
    let splitted = textcon.split("");
    splitted.forEach((elem2) => {
      clutter += `<span>${elem2}</span>`;
    });
    elem.innerHTML = clutter;
  });
}
function gsapani() {
  gsap.to("#page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2 h1 span",
      scroller: "#main",
      start: "top 40%",
      end: "top -20%",
      //   markers: true,
      scrub: 4,
    },
  });
}
locoscroll();
textamker();
gsapani();