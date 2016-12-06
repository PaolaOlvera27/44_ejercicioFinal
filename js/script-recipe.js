$(document).ready( function(){
	console.log("Se ha cargado el documento");
//ocultar menu
	$(".js-menu").hide();

//ocultar y mostrar recetas
	$(".js-show-make").click(function(){
	  $(".page").addClass("make");
		$(".js-show-make").addClass("active");
		$(".js-show-recipe").removeClass("active");
	});
	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(".js-show-recipe").addClass("active");
		$(".js-show-make").removeClass("active");
	});
});
