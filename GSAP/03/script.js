var path = "M 10 100 Q 500 100 990 100";
var finalpath = "M 10 100 Q 500 100 990 100";

let string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`

    gsap.to("svg path", {
        attr: { d: path },
        duration:1,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.3)"
    })
})