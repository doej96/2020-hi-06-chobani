/******** 전역설정 *********/
/**
 * ? animate말고 css transtion active로 줘보기
 * ? 사이즈 늘어나면 없어지기
 * ? 모바일 네비
 * ? 스크롤
 */


/******** 이벤트 등록 *********/
$(document).ready(onReady);
new WOW().init();

$('.navi').mouseenter(onMouseEnter);
$('.navi').mouseleave(onMouseLeave);

$('.fa-search').click(onClickSearch);
$('.search .fa-times').click(onClickClose);

$('.fa-bars').click(onShowModal);
$('.close .fa-times').click(onHideModal);
$('.depth').click(onShowDepth2);
$('i.fa-arrow-left').click(onShowDepth1);


/******** 이벤트 콜백 *********/
function onShowDepth2() {
	$(this).find('.depth2').animate({left: "0"},600);
	$('i.fa-arrow-left').css("display", "block");
}

function onShowDepth1() {
	$('.depth2').animate({left: "100%"},600);
	$('i.fa-arrow-left').css("display", "none");
	$(this).hide();
}

function onShowModal() {
	$('.modal-container').animate({left: "0"},600);
	$('i.fa-arrow-left').hide();
}

function onHideModal() {
	$('.modal-container, .depth2').animate({left: "100%"},600);
}

function onEnterSlide() {
	$(this).addClass('active')
}

function onLeaveSlide() {
	$(this).removeClass('active')
}

function onReady() {
	$('.main-wrap').hide().fadeIn();
}

function onMouseEnter() {
	if ($(window).width() > 1199)
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
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	// init: false,
	pagination: {
	  el: '.pager-wrap',
	  clickable: true,
	},
	breakpoints: {
	  576: {slidesPerView: 1},
	  786: {
		slidesPerView: 3,
		spaceBetween: 30,
	  },
	  992: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	}
});
$('.swiper-slide .box').mouseenter(onEnterSlide);
$('.swiper-slide .box').mouseleave(onLeaveSlide);


