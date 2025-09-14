
/* ===== Cursor Animation ===== */

var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function() {
    posX += (mouseX - posX) / 9;  
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
            left: posX - 20,
            top: posY - 20
        }
    });

    TweenMax.set(cursor, {
        css: {
            left: mouseX,
            top: mouseY
        }
    });
}
});

$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$(".swiper-wrapper").on("mouseenter", function() {
cursor.addClass("active");
follower.addClass("active");
});

$(".swiper-wrapper").on("mouseleave", function() {
cursor.removeClass("active");
follower.removeClass("active");
});

/* ===== OPEN MENU ===== */

var full = document.querySelector("#full-scr")
var menu = document.querySelector("nav h3")
var flag = 0
var navimg = document.querySelector("nav img")
menu.addEventListener("click", function(){
    if(flag == 0){ 
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})

/* ===== OPEN WORK PROJECTS ===== */

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer");

var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showpanel (panelIndex){ 
    tabButtons.forEach(function(node){
    });
     
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="contents";
}

/* ===== TECH STACK SWIPER ===== */

function swiperAnimation(){
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
       
    });
}

/* ===== LOADER ===== */

function loaderAnimation(){
    var loader = document.querySelector("#loader")
    setTimeout(function(){
        loader.style.top = "-100%"
    }, 4200)
}



/* ===== SHOW IMG ON HOVER ===== */

function page4Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block"
    })  
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none"
    })


    var elements = document.querySelectorAll(".elem")
    elements.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

/*=== SCROLL REVEAL ANIMATION ===*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '90px',
    duration: '2500',
    delay: '400',
    reset: false
})

/*=== SR Contact Page ===*/

sr.reveal(`.top-contact-title`, {delay: 500, origin:'bottom', interval:100}) 

sr.reveal(`.bottom-contact-title`, { origin:'bottom', interval:200})
sr.reveal(`.email`, {delay: 450, origin:'left'}) 
sr.reveal(`.contact-socials`, { origin:'bottom'}) 

/*=== SR Work Page ===*/

sr.reveal(`.work-title `, {origin:'top',distance:'70px', delay:'800', interval:100}) 

sr.reveal(`.work-project1 `, {origin:'bottom', interval:'100'}) 

sr.reveal(`.work-project1-M `, {origin:'bottom', delay:'200', interval:'100',distance:'70px'}) 

/*=== SR Index Page ===*/

sr.reveal(`.elem h2` , {origin:'bottom', distance:'50px', interval:200}) 

/*=== SR About Page ===*/

sr.reveal(`.top-txt`, {delay: 500, origin:'bottom', interval:100}) 
sr.reveal(`.second-text`, {delay: 450, origin:'bottom', interval:150}) 
sr.reveal(`.third-text`, { origin:'bottom', interval:200})

sr.reveal(`.bottom-about-pg p` , {origin:'right'}) 

sr.reveal(`.huge-title`, {distance:'70px', origin:'bottom', interval:200})

sr.reveal(`.number p` , {origin:'right'}) 
sr.reveal(`.number ` , {origin:'right'}) 

sr.reveal(`.left-sub-title ` , {origin:'bottom', delay:'700', distance:'50px'}) 


page4Animation()
swiperAnimation()
loaderAnimation()

/*
##### MAKES MENU 50% BAD BY GOING FULL SCREEN ####

function smoothScroll(){
    
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

smoothScroll()

 */
