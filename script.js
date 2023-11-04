var menuicon = document.querySelector("#nav i");
var openedmenu =document.querySelector(".open-menu");
 
menuicon.addEventListener("click" , function(){
          openedmenu.classList.toggle("active");
});

gsap.from("#nav img", {
    y:60,
    duration:1,
    repeat:-1,
    yoyo:true,
    delay:.2
})
gsap.from(".nav-links", {
    y:100,
    duration:1.9,
    stagger:.5,
    opacity:0,
    delay:.3,
    rotate:360,
    scale:4,
})

gsap.to("#nav" , {
backgroundColor:"#000",
duration:.5,
height:"90px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -20%",
    end:"top -11%",
    scrub:true
}
});
gsap.to("#main" ,{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -24%",
    end:"top -70%",
    scrub:true
  }
});
var blurcrsr =document.querySelector(".cursor-blur")
  var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove" , function(dets){
       crsr.style.left= dets.x +"px"
       crsr.style.top= dets.y+"px"
       blurcrsr.style.left= dets.x - 200+"px"
       blurcrsr.style.top= dets.y - 200+"px"
});


gsap.from("#yoyofan",{
    y:-50,
    duration:1,
    repeat:-1,
    yoyo:true

})

gsap.from(".page-1 " ,{
    x:-70,
    opacity:0,
    y:40,
    delay:2.1,
    stagger:0.6


});

gsap.from("#img-1", {
  x:-10,
  duration:1,
  y:10,
repeat:-1,
yoyo:true

});

gsap.from("#img-2", {
  x:-10,
  duration:1,
  y:-10,
repeat:-1,
yoyo:true

});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2300,
    disableOnInteraction: false,
  },
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});