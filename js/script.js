var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



let menuBtn = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})