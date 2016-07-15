import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector:'fold-button',
	template:`
		<i 
			class='glyphicon'
			[ngClass]="{
				'glyphicon-chevron-down':!isSelected,
				'glyphicon-chevron-up':isSelected
			}" 
			(click)='onClick()'>
		</i>
	`
})
export class FoldButtonComponent {
	isSelected = false;
	@Output() status = new EventEmitter();

	onClick(){
		this.isSelected = !this.isSelected
		this.status.emit({newValue: this.isSelected});
	}
}