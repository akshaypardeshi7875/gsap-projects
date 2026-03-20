gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})

gsap.from("#page3 h1",{
    opacity:0,
    x:-800,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3
    }
})

gsap.from("#page3 h3",{
    opacity:0,
    x:800,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:3
    }
})