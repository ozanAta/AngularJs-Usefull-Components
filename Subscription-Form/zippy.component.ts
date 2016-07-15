import {Component, Input} from 'angular2/core';
import {FoldButtonComponent} from './fold-button.component';
@Component({
	selector:'zippy',
	template:`
		<div class='zippyTable'*ngIf=!!title>
			<div class='header'>
				<div class='headerContent'>
					<b>{{title}}</b>
					<fold-button class='headerFoldButton' (status)='getStatus($event)'></fold-button>
				</div>
			</div>
			<div class='body' *ngIf=isSelected>
				<div class='bodyContent'>
					<ng-content></ng-content>
				</div>
			</div>
		</div>
	`,
	directives:[FoldButtonComponent],
	styles:[`
	.zippyTable{
		margin-left:5px;
		
		width:1000;
		height:auto;
		border:1px solid;
		border-color:#ccc;
		border-radius:5px;

	}
	.zippyTable :hover{
		background-color:#ccc ;
	}
	.header{
		font-size:40px;
		border:0.5px solid;
		border-color:#ccc;
		height:auto;
	}
	.headerContent{
		padding:15px;
	}
	.headerFoldButton{
		float:right;
	}
	.body{
		font-size:30px;
		height:autopx;
	}
	.bodyContent{
		padding:15px;
	}
	`]
})
export class ZippyComponent{
	isSelected;
	@Input() title:string;

	getStatus(status){
		this.isSelected=status.newValue;
	}
}