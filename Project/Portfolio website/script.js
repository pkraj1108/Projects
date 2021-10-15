$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY  >  20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Typing animation

    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Engineer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

})

burger = document.querySelector('.burger')
navList = document.querySelector('.max-width')
rightNav = document.querySelector('.menu')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('h-nav-resp')
    rightNav.classList.toggle('v-class-resp')
})
