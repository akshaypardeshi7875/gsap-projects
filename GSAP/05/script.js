var menu = document.querySelector("#nav i");
var closemenu = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full",{
    duration:0.8,
    right:0
})

tl.from("#full h4",{
    opacity:0,
    x:100,
    duration:0.5,
    stagger:0.7,
})

tl.from("#full i",{
    opacity:0,
    y:-100,
    duration:0.5
})

tl.pause();

menu.addEventListener("click", function(){
    tl.play();
})

closemenu.addEventListener("click", function(){
    tl.reverse();
})

gsap.from("#nav h2",{
    opacity:0,
    scale:1,
    x:-100,
    duration:1.5
})

gsap.from("#nav i",{
    opacity:0,
    scale:1,
    x:+100,
    duration:1.5
})

