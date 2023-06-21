if(/iPhone|iPod|Android|iPad/.test(window.navigator.platform)){
	$(document)
	.on('focus', 'textarea,input,select', function(e) {
		$('#header').css('position', 'absolute');
	})
	.on('blur', 'textarea,input,select', function(e) {
		$('#header').css('position', '');
	});
}
$(document).ready(function() {
	stageResize();

	// 타이틀 변환
	var homeTile = document.title;
	arrTitle = jQuery('.sub-title h2').text();
	if($(".sub-title").length){
		document.title=arrTitle + " | " + homeTile;
	};

	// header
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$("#header").addClass("header-fixed");
		}else{
			$("#header").removeClass("header-fixed");
		}
	});

	/* 전체메뉴 */
	$(".all-menu .nav").append($("#gnb").html());

	$(".btn-all-menu").click(function(){
		$(".all-menu").addClass("active");
		return false;
	});
	$(".all-menu .close").click(function(){
		$(".all-menu").removeClass("active");
	});

	$("html").addClass("loaded");


	// 텝
	jQuery(".tab-content").hide();
	jQuery("ul.tabs>li:first").addClass("active"); 	
	jQuery(".tab-content:first").show();

	jQuery("ul.tabs>li").click(function(e) {
		e.preventDefault();
		jQuery("ul.tabs>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tab-content").hide();		

		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).show();
		return false;
	});

	

	// slider
	$('.main-visual .items').on('init', function(event, slick) {
		setTimeout(function(){ $('.main-visual').find('.slick-current').addClass('active'); },100);
		// $(".main-visual .paging").html('<span class="current">1</span>' + ' <span class="bar"></span> ' + slick.slideCount +'</div>')
	})
	.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
		fade: true,
		arrows: true,
		dots: true,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 5000
	})

	$('.main-visual .controls .prev').click(function(){
		$('.main-visual .items').slick('slickPrev');
	});

	$('.main-visual .controls .next').click(function(){
		$('.main-visual .items').slick('slickNext');
	});

	// $('.main-visual .controls .stop').click(function(){
	// 	$(this).hide();
	// 	$('.main-visual .items').slick('slickPause');
	// 	$('.main-visual .controls .play').show();
	// });
	// $('.main-visual .controls .play').click(function(){
	// 	$(this).hide();
	// 	$('.main-visual .items').slick('slickPlay');
	// 	$('.main-visual .controls .stop').show();
	// });


	// fancybox
	$(".zoom").fancybox({
		padding     : 0,
		margin      : 16,
		fitToView	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".pop_privacy").fancybox({
		padding     : 0,
		margin      : 16,
		fitToView	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'ajax'
	});

	$(".pop_email").fancybox({
		padding     : 0,
		margin      : 16,
		fitToView	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'ajax'
	});

	// usemap
	jQuery('img[usemap]').rwdImageMaps();

	// input
	$("input[type=tel],onlyNumber").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

	// datepicker
	$(".datepicker").datepicker({
		dateFormat: 'yy-mm-dd' //Input Display Format 변경
		,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시    
		,changeMonth: true //월 선택 표시
		,changeYear: true //년도 선택 표시
		,minDate: '-100y' // 현재날짜로부터 100년이전까지 년을 표시
		,yearRange: 'c-100:c+10' // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		,prevText: "이전달"
		,nextText: "다음달"
		,buttonText: "날짜선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
	}); 

	$(".datepicker2").datepicker({
		dateFormat: 'yy-mm-dd' //Input Display Format 변경
		,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시    
		,changeMonth: true //월 선택 표시
		,changeYear: true //년도 선택 표시
		,minDate: '-100y' // 현재날짜로부터 100년이전까지 년을 표시
		,yearRange: 'c-100:c+10' // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
		,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		,prevText: "이전달"
		,nextText: "다음달"
		,buttonText: "날짜선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
	}); 

	// top
	$('.scroll-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800,'easeInOutQuint');
		return false
	});


    // family
    $(".family .tit").click(function() {
        $(this).toggleClass("active");
        $('.family-open').toggleClass("active");
    });

    //토글메뉴
	jQuery(".lnb-path .submenu>.tit").bind("click", function(){
		var t = jQuery(this).parent("div");
		if(!t.hasClass("active")){
			jQuery(".lnb-path .submenu").removeClass("active").find("ul").slideUp(100);
			t.addClass("active").find("ul").slideDown(200);
		}else{
			t.removeClass("active").find("ul").slideUp(100);
		}
		return false		
	});
	jQuery(".lnb-path .page-name").text(jQuery(".lnb-path li.active a").text());

	
});

$(window).scroll(function(){
	if($(document).scrollTop() > 200){
		$(".scroll-top").addClass("active");
	}else{
		$(".scroll-top").removeClass("active");
	}
});

$(window).bind("load resize", function(){
	stageResize();
});
function stageResize(){
	var winH = $(window).height(),
		headH = $("#header").outerHeight(),
		subH = $(".sub-visual").outerHeight(),
		lnbH = $(".lnb-wrap").outerHeight(),
		footH = $("#footer").outerHeight();

	$("#container").css("min-height",winH-footH-subH-lnbH-headH);

	if($(window).width()<640){
		jQuery(".board-view-cnt iframe").css("min-height",(jQuery(".board-view-cnt").width()-30)*.5625);
	}
}

$(window).bind("load", function(){
	AOS.init({
		easing: 'ease',
		duration: 1000,
		once: true
	});
});