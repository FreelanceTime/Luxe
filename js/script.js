//ДЛЯ ВЫПАДАЮЩЕГО МЕНЮ В ШАПКЕ user-header__menu
 /*$('.user-header__icon').click(function (event) {
    $('.user-header__menu').toggleClass('active');//кликаю на иконку юзера 
    $('.user-header__menu').slideToggle("slow");//меню юзера выезжает вниз 
});*/
//А МОЖНО СДuser-header__iconЕЛАТЬ, ЧТОБЫ ПРИ КЛИКЕ ОТКРЫВАЛОСЬ, А ПРИ НАЖАТИИ НА ЛЮБОЕ МЕСТО ЭКРАНА, ЗАКРЫВАЛОСЬ
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

//1 для меню бургера в шапке
$(document).ready(function () {
    $('.header__burger-icon').click(function (event) {
        $('.header__burger-icon').toggleClass('active');
        $('.header__burger-menu').slideToggle("slow");
    });
})

//ЧТОБЫ КАРТИНКА В HTML СТАНОВИЛАСЬ ФОНОМ И АДАПТИРОВАЛАСЬ, НЕ НАДО В CSS ПРОПИСЫВАТЬ БЭК-ГРАУНД
function ibg(){
    let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();
/*function ibg(){//КОД В J QUARY ЧТОБЫ КАРТИНКА В HTML СТАНОВИЛАСЬ ФОНОМ
    $.each($('.ibg'), function(index, val) { if($(this).find('img').length>0){ $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); } });
}
ibg();*/
$('.icon__img').click(function (event) {
    $('.icon__img').toggleClass('active');
});


