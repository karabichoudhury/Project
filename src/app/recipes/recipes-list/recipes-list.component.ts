import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipes:Recipe[]=[
  		new Recipe('A Test recipe','This is a test recipe','https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg'),
  		new Recipe('A Test recipe1','This is a test recipe1','https://i.ytimg.com/vi/vHUf7mNM4s8/hqdefault.jpg')
  	];

  constructor() { }

  ngOnInit() {
  }

}
