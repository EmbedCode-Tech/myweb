gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".hero-text", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".hero-sub", {
    opacity: 0,
    y: 50,
    delay: 0.5,
    duration: 1
});

gsap.from(".btn", {
    opacity: 0,
    scale: 0.5,
    delay: 1,
    duration: 0.8
});

/* SCROLL ANIMATIONS */
gsap.from(".section", {
    scrollTrigger: {
        trigger: ".section",
        start: "top 80%"
    },
    opacity: 0,
    y: 150,
    duration: 1.2,
    stagger: 0.3
});
