
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
   let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('active');
}); 
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('active');
 }   
});


$(document).ready(function () {
    $('.header__burger-icon').click(function (event) {
        $('.header__burger-icon').toggleClass('active');
        $('.header__burger-menu').slideToggle("slow");
    });
})


function ibg(){
    let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();

$('.icon__img').click(function (event) {
    $('.icon__img').toggleClass('active');
});


