$('.carousel').carousel({
  interval: 2000
})


var allList = $("#bs-example-navbar-collapse-1 li");
$(allList[2]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_hot").offset().top }, 500);
});
$(allList[0]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_about").offset().top }, 500);
});
$(allList[1]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_product").offset().top }, 500);
});
$(allList[3]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_hot").offset().top }, 500);
});
$(allList[4]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_link").offset().top }, 500);
});
$(allList[5]).click(function(){
	$("html,body").animate({scrollTop: $("#lk_footer").offset().top }, 500);
});



$("#top").click(function () {
	$("html,body").animate({scrollTop: 0}, 500);
	
})
$(window).scroll(function () {
	if ($("html,body").scrollTop() >= 250) {
		$("#top").css("display","block");
	} else{
		$("#top").css("display","none");
	}
})
