import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
	
	selectedRecipe=new EventEmitter<Recipe>();
	recipes:Recipe[]=[
		{name:'Chicken Curry',description:'This is chicken curry recipe ',imagePath:'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg'},
		{name:'Chicken Braised',description:'This is chicken braised recipe ',imagePath:'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg'}
	];

	getRecipes(){
		return this.recipes;
	}

	onSelectedRecipe(recipe){
		this.selectedRecipe.emit(recipe);
	}

}