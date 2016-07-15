import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector:'fav-button',
	template:`
	<i 
		class ='glyphicon'
		[class.glyphicon-star-empty]='!isFavorite' 
		[class.glyphicon-star]='isFavorite'
		(click)='onClick()'>
	</i>
	`,
	styles:[`
		.glyphicon-star{
			color:orange;
		}
		.glyphicon-star-empty{
			color:orange;
		}
	`]
})

export class FavButtonComponent{
	@Input() isFavorite=false;
	@Output() change = new EventEmitter();

	onClick(){
		this.isFavorite = !this.isFavorite;
		this.change.emit({newValue: this.isFavorite});
	}
}
/*
	This is a good example of class binding. Also you can use this component in other applications too.
	We can add an inputs array to component's meta data to define inputs.
	@Input() isFavorite === inputs:['isFavorite']
	@Input('name-of-input') isFavorite -> [name-of-input]='value';
	inputs:['isFavorite:name-of-input'] -> [name-of-input]='value';
	-------------------------------------------------------------------
	styleUrls:['path-to-css-file'] you can use external css file for this component with styleUrls
	styles:[`css-formatting-like-template`] in-line style formatting.
*/