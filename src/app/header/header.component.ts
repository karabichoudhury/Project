import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {
  title = 'app';

  @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature:string){
   console.log(feature);
   this.featureSelected.emit(feature);
  }
}
