const main1 = document.querySelector('.sell_container .main_bg')
const sub1 = document.querySelector('.sub_menu .sub_view1')
const sub2 = document.querySelector('.sub_menu .sub_view2')
const sub3 = document.querySelector('.sub_menu .sub_view3')
const sub4 = document.querySelector('.sub_menu .sub_view4')
const sub5 = document.querySelector('.sub_menu .sub_view5')
sub1.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/seb_menu_001.jpg" alt="">'
})
sub2.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/seb_menu_002.jpg" alt="">'
})
sub3.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/seb_menu_003.jpg" alt="">'
})
sub4.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/seb_menu_004.jpg" alt="">'
})
sub5.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/main_bg.jpg" alt="">'
})

$('.select_color .select_menu a').click(function(e){
    e.preventDefault()
    $('.select_color .select_menu a').removeClass('active');
    $(this).addClass('active');  
})
$('.select_size .size_aria a').click(function(e){
    $('.select_size .size_aria a').removeClass('active');
    $(this).addClass('active');  
})
$('.item_information a').click(function(e){
    $('.item_information a').removeClass('active');
    $(this).addClass('active');  
})
$('.details_page').click(function(e){
    e.preventDefault()
})
$('.size_page').click(function(e){
    e.preventDefault()
})

const valueMath = document.querySelector('#num');
const numPlus = document.querySelector('#numPlus');
const numMinus = document.querySelector('#numMinus');
console.log(valueMath, numPlus);
numPlus.addEventListener('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //기존 수량의 값(오른쪽)에 1을 더해서 수량칸(왼쪽)에 대입하기
    valueMath.value = Number(valueMath.value)+1 
    console.log(typeof(num.value));
})
numMinus.addEventListener('click',function(){
    if (valueMath.value > 1) {
        valueMath.value = Number(valueMath.value)-1
    }
})
$('.check_on').hide()
$('.right_contents a').click(function(e){
    e.preventDefault()
    $('.check_out').hide()
    $('.check_on').show()
})
sub4.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/seb_menu_004.jpg" alt="">'
})

