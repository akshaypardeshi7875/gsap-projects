var tl = gsap.timeline();

tl.from("#logo", {
    y:-100,
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0.5
})

tl.from("#nav-links a", {
    y:-100,
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0.5,
    stagger:0.2
})

gsap.from("#box", {
    x:-100,
    opacity:0,
    duration:1,
    delay:1,
    scale:0.5,
    borderRadius: "50%"
});

gsap.to("#box", {
    x:1100,
    opacity:0,
    duration:2,
    delay:2,
    scale:0.5,
    borderRadius: "50%"
});