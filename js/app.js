// header wrapper toggle==========
$('#headRightBtn').click(function () {
    $('#rightWrapper').addClass('right-wrapper-active');
    // $('#rightWrapper').
})
$('#right-cls-btn').click(function () {
    $('#rightWrapper').removeClass('right-wrapper-active');
})
$('#mainBtnNav').click(function () {
    $('#leftMainNav').addClass('man-left-active')
})
$('#leftNavClose').click(function () {
    $('#leftMainNav').removeClass('man-left-active')
})
// header wrapper toggle end here ===============

// after scroll fixed nav ===============
var navbar = document.getElementById("mainHeader");
// navbar.classList.add('fixed-nav')


window.onscroll = function () {
    $('#leftMainNav').removeClass('man-left-active')
    $('#rightWrapper').removeClass('right-wrapper-active');
    var scrollVal = window.scrollY;

    // console.log(scrollVal);
    if (scrollVal >= 450 && scrollVal < 800) {
        navbar.classList.add('nav-effect')
    } else if (scrollVal >= 800) {
        navbar.classList.remove('nav-effect')
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('nav-effect')
        navbar.classList.remove('fixed-nav')
    }
}


// window.onscroll = function(){
//     if(scrollVall == 100){
//         navbar.classList.add('fixed-nav')
//     }else if(scrollVal ==99){
//         navbar.classList.remove('fixed-nav')
//     }
// }
// Initialize Swiper=======================

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// typing effect -----------------------
var type = new TypeIt("#typing", {
    lifeLike: false,
    speed: 0,
    loop: true,
})

function typing_stuff(typing_string) {

    var typing_string_len = typing_string.length;
    for (var i = 0; i < typing_string_len; i++) {
        type.type(typing_string[i])
        type.pause(100)
    }
    type.pause(2000)
    for (var i = 0; i < typing_string_len; i++) {
        type.delete(1)
        type.pause(100)
    }
}

typing_stuff("a Full Stack Web Developer ")
typing_stuff("a Python Backend Developer ")
typing_stuff("a Algorithm Developer ")

type.go();


// behivor smooth =========================================

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


function download_resume() {
    window.open('https://drive.usercontent.google.com/u/1/uc?id=1rxArm0t3ZI27w9IAJbLBQz3-Rsb_X5uW&export=download')
    $('#leftMainNav').removeClass('man-left-active')
    $('#rightWrapper').removeClass('right-wrapper-active');
}

resume1 = document.getElementById('resume-link-1')
resume3 = document.getElementById('resume-link-3')
resume4 = document.getElementById('resume-link-4')
resume5 = document.getElementById('resume-link-5')
resume6 = document.getElementById('resume-link-6')
resume2 = document.getElementById('resume-link-2')

resume1.addEventListener("click", download_resume)
resume3.addEventListener("click", download_resume)
resume4.addEventListener("click", download_resume)
resume5.addEventListener("click", download_resume)
resume6.addEventListener("click", download_resume)
resume2.addEventListener("click", download_resume)
