function breakTheText(){
const h1 = document.querySelector("h1");
const h1Text = h1.textContent

const splitedText = h1Text.split ("")
const halfValue = Math.floor(splitedText.length / 2);

const clutter = ""

splitedText.forEach(function(elem,idx){
    if(idx<halfValue){
        clutter+= `<span class="a" >${elem}</span>`
    }
    else{
         clutter+= `<span class="b" >${elem}</span>`
    }
})
h1.innerHTML=clutter
}

breakTheText()

gsap.from("h1 .a",{
    x:80,
    duration:0.5,
    delay:0.5,
    stagger:0.15,
    opacity:0

})
gsap.from("h1 .b",{
    x:80,
    opacity:0,
    duration:0.5,
    stagger:-0.15,
    delay:0.5

})