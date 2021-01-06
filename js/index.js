/******** 전역변수 *********/



/******** 이벤트 등록 *********/
$(document).ready(onReady);
new WOW().init();

$('.navi').mouseenter(onMouseEnter);
$('.navi').mouseleave(onMouseLeave);

$('.fa-search').click(onClickSearch);
$('.fa-times').click(onClickClose);
// $(window).resize(onResize).trigger("resize");


/******** 이벤트 콜백 *********/
function onReady() {
	$('.main-wrap').hide().fadeIn();
}

function onMouseEnter() {
	$(this).find('.sub-navi').stop().slideDown(300);
}

function onMouseLeave() {
	$(this).find('.sub-navi').stop().slideUp(300);
}

function onClickSearch() {
	$(this).parent().find('.navi').animate({opacity: '0', left: "-100px"},800);
	$(this).hide();
	$('.search').animate({opacity: '1'},800);
	$('.navi-right-cont').addClass('active');
}

function onClickClose() {
	$('.navi').animate({opacity: '1', left: "0"},500);
	$('.fa-search').show();
	$('.search').animate({opacity: '0'},500);
	$('.navi-right-cont').removeClass('active');
}

/******** 사용자 함수 *********/



