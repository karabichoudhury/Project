import { Component, OnInit ,ElementRef,ViewChild,Output,EventEmitter} from '@angular/core';

import { ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() ingredientAdded =new EventEmitter<ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const ingredientAdd = new ingredient(ingName,ingAmount);
  	this.ingredientAdded.emit(ingredientAdd);
  }

}
