$(document).ready( function(){
	printNew();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderRecipe();


	// ocultar flecha menu
	$(".js-back").hide();
});

function printNew (){
	$(".callout-news p").text("NUEVAS RECETAS");

}

/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i=0; i<recipesArray.length; i++) {
		if(recipesArray[i].highlighted == true) {
				renderRecipe(recipesArray[i]);
		}
	}
}


/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta : ', recipe);
	if (!recipe) {
		return;
	}

	var aRecipe = $('<a></a>');
	aRecipe.addClass("item-recipe");

	var spanAttr = $('<span></span>');
	spanAttr.addClass("attribution");

	var spanTitle = $('<span></span>');
	spanTitle.addClass("title-recipe");
	console.log(recipe.title);
	spanTitle.text(recipe.title);

	var spanMetadata = $('<span></span>');
	spanMetadata.addClass("metadata-recipe");

	var spanAuthor = $('<span></span>');
	spanAuthor.addClass("author-recipe");
	spanAuthor.text(recipe.name);

	var spanBook = $('<span></span>');
  spanBook.addClass("bookmarks-recipe");

	var spanIcon = $('<span></span>');
  spanIcon.addClass("icon-bookmark");

	var imgRecipe = $('<img />');
  imgRecipe.attr("src", "img/recipes/320x350/" + recipe.name + ".jpg" );

	aRecipe.append(spanAttr);
	aRecipe.append(imgRecipe);
	spanAttr.append(spanTitle);
	spanAttr.append(spanMetadata);
	spanMetadata.append(spanAuthor);
	spanMetadata.append(spanBook);
	spanBook.append(spanIcon);

	$('.list-recipes').append(aRecipe);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
