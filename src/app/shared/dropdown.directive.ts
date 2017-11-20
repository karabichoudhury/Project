import { Directive,HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDropdown]',
})

export class DropdownDirective{
	 

	 @HostBinding('class.open') isOpen=false;

	 @HostListener('click') toggleOpne(){
  		this.isOpen=!this.isOpen;
  	}
}