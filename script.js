const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})



function ImageAnimation() {
    var elems = document.querySelectorAll("#elem")

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });

}

function menu(){
    var menu = document.querySelector("nav h3")
var fullScr = document.querySelector("#full-scr")
var navImg = document.querySelector("nav img")
var flag = 0

menu.addEventListener("click", function () {
    if (flag == 0) {
        fullScr.style.top = 0
        navImg.style.opacity = 0
        flag = 1
    } else {
        fullScr.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})
}

ImageAnimation()
swiperAnimation()
menu()

var loader = document.querySelector("#loader")
setTimeout(function(){
loader.style.top = "-100%"
},4000)

