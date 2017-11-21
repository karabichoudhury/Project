import { EventEmitter,Injectable } from '@angular/core';


import { Recipe } from './recipe.model';
import { ingredient} from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
	
	constructor(private shoppingService:ShoppingService){}

	selectedRecipe=new EventEmitter<Recipe>();
	recipes:Recipe[]=[
		new Recipe(
		'Chicken Curry',
		'This is chicken curry recipe ',
		'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg',
		[
			new ingredient('Chicken',1),
			new ingredient('Tomato',3),
			new ingredient('Onion',3)
		]),
		new Recipe(
		'Chicken Braised',
		'This is chicken braised recipe ',
		'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
		[
			new ingredient('Chicken Boneless',250),
			new ingredient('Mixed Herbs',10),
			new ingredient('Pepper',1)
		])
	];

	getRecipes(){
		return this.recipes;
	}

	onSelectedRecipe(recipe){
		this.selectedRecipe.emit(recipe);
	}

	addIngredientsToShoppingList(recipe:Recipe){
		this.shoppingService.addIngredients(recipe.ingredients);
	}

}