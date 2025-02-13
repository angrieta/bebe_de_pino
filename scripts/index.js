var bnr = new Swiper(".mainBnr", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    navigation: {
        nextEl: ".mainBnr .swiper-button-next",
        prevEl: ".mainBnr .swiper-button-prev",
    },
});
var newContents = new Swiper(".new_container", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 5,
    spaceBetween: 12,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var best = new Swiper(".best_aria", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 3,
    spaceBetween: 44,
});

var sale = new Swiper(".sale_container", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 4,
    spaceBetween: 20,
});
var review = new Swiper(".review_container", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var instar = new Swiper(".instar_container", {
    autoplay:{
        delay:3000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.category a').click(function(e){
    e.preventDefault()
    $('.category a').removeClass('active');
    $(this).addClass('active');  
})
$('.sale .category a').click(function(e){
    e.preventDefault()
    $('.category a').removeClass('active');
    $(this).addClass('active');  
})
$('.category_column a').click(function(e){
    e.preventDefault()
    $('.category_column a').removeClass('active');
    $(this).addClass('active');  
})
$('.sale .category_column a').click(function(e){
    e.preventDefault()
    $('.category_column a').removeClass('active');
    $(this).addClass('active');  
})
$('.search_aria').hide();
$('.inner .search_btn').click(function(){
    //$('.header_menu').show();
    $('.search_aria').slideDown(); //fadeIn 도 사용가능
})
$('.search_aria').mouseleave(function(){
    $('.search_aria').hide();
})
/* 메뉴카테고리 시작 */
$('.header_menu').show();
$('.submenu').hide();
$('.menu-item').click(function(){
    $('.submenu').slideUp();
    $(this).next('.submenu').slideDown();
})
$('.menu_close').click(function(){
    $('.header_menu')
    .animate({left:'-450px'},300)
})
$('.inner .btm_left_menu').click(function(){
    $('.header_menu')
    .animate({left:'0px'},300)
})
$('.menu-item a').removeClass('active');
$('.menu-item a').click(function(e){
    e.preventDefault()
    $('.menu-item a').removeClass('active');
    $(this).addClass('active');  
})
$('.menu-item a').click(function(e){
    e.preventDefault()
    $('.menu-item a').removeClass('active');
    $(this).addClass('active');  
})


/* 메뉴카테고리 종료 */