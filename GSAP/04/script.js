const cursor = document.querySelector('#cursor');
const main = document.querySelector('#main');
const imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', function(val){
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
       ease: "power2.out",
    })
})

imageDiv.addEventListener('mouseenter', function(){
    cursor.innerHTML='View More',
    gsap.to(cursor,{
        scale:4,
        backgroundColor:'#ffffff8a'
    })
})

imageDiv.addEventListener('mouseleave', function(){
    cursor.innerHTML='',
    gsap.to(cursor,{
        scale:1,
        backgroundColor:'white'
    })
})