import { EventEmitter} from '@angular/core';

import { ingredient } from '../shared/ingredient.model';

export class ShoppingService{
  ingredientsChanged = new EventEmitter<ingredient[]>();

	ingredients:ingredient[]=[
  	new ingredient('Apples',5),
  	new ingredient('Tomatoes',10)
  ];

  getIngredients(){
  	return this.ingredients.slice();
  }

  onIngredientAdded(ingredientAdded:ingredient){
  	this.ingredients.push(ingredientAdded);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}