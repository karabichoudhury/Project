import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';

import { ingredient} from '../../shared/ingredient.model';
import { ShoppingService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const ingredientAdd = new ingredient(ingName,ingAmount);
    this.shoppingService.onIngredientAdded(ingredientAdd);
  	//this.ingredientAdded.emit(ingredientAdd);
  }

}
