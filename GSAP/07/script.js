function marqueAnimation(){
    window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 2,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque i",{
            rotate:180
        })
    }
    else {
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 2,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque i",{
            rotate:0
        })
    }
})
}

marqueAnimation()
