$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header__list").toggleClass("active");
		$(".bg").toggleClass("active");
		$("body").toggleClass("lock");
	})
})