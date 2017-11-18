import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    @Output() chosenRecipe = new EventEmitter<Recipe>();

    recipes:Recipe[]=[];

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeWasSelected(recipe:Recipe){
    this.chosenRecipe.emit(recipe);
  }

}
