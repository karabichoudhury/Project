import { Component, OnInit } from '@angular/core';

import { ingredient} from '../shared/ingredient.model';
import { ShoppingService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[]=[];

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (ingredients:ingredient[])=>{
        this.ingredients=ingredients;
        }
      )
  }

}
