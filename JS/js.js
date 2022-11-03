
$(document).ready(function($){
   
	var full = $('#fullscreen');
	$(full).data('state','open');
	$('.main-part__btn-article').click(function(){
	  if($(full).data('state') == 'open'){
		 $(full).fadeIn(300);
		 $(full).data('state','close');
		 //console.log($(full).data('state') );
	  }
	});
	$('.close').click(function(){
	  if($(full).data('state') == 'close'){
		 $(full).fadeOut();
		 $(full).data('state','open');
		//console.log($(full).data('state') );
	  }
	});  
});

$(document).ready(function(){


	// let flag = false
	// $('.header__menu-items').click(function(){
	// 	if(!flag){
	// 		$('.header__menu-list').slideDown();
	// 	}else{
	// 		$('.header__menu-list').slideUp();
	// 	}
	// 	flag = !flag;
	// })


	// -----menu--click--btn1----
	$('.header__menu-btn1').on('click', function(){
		$('.header__menu-list1').fadeToggle();
	});
	
	let menuBtn1 = $('.header__menu-btn1');
	let categories1 = $('.header__menu-list1');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn1.is(e.target) && menuBtn1.has(e.target).length === 0 &&
			! categories1.is(e.target) && categories1.has(e.target).length === 0
		){
		categories1.fadeOut();
	}
	});
// ----------------menu--click--btn2----
	$('.header__menu-btn2').on('click', function(){
		$('.header__menu-list2').fadeToggle();
	});
	
	let menuBtn2 = $('.header__menu-btn2');
	let categories2 = $('.header__menu-list2');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn2.is(e.target) && menuBtn2.has(e.target).length === 0 &&
			! categories2.is(e.target) && categories2.has(e.target).length === 0
		){
		categories2.fadeOut();
	}
	});
// ---------------menu--click--btn4----
	$('.header__menu-btn4').on('click', function(){
		$('.header__menu-list4').fadeToggle();
	});
	
	let menuBtn4 = $('.header__menu-btn4');
	let categories4 = $('.header__menu-list4');
	
	$(document).mouseup(function (e) { 
		if(! menuBtn4.is(e.target) && menuBtn4.has(e.target).length === 0 &&
			! categories4.is(e.target) && categories4.has(e.target).length === 0
		){
		categories4.fadeOut();
	}
	});


}
)
