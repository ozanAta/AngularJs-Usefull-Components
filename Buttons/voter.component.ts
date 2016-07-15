import {Component, Input} from 'angular2/core';

@Component({
	selector:'voter',
	template:`
		<div class='voteWrapper'>
			<i 
				class='glyphicon glyphicon-menu-up'
				[class.highlighted]='isUp && !isDown'
				(click) = 'onClickUp()'
			></i>
			<span>{{votePoints}}</span>
			<i 
				class='glyphicon glyphicon-menu-down'
				[class.highlighted]='!isUp && isDown'
				(click) = 'onClickDown()'
			></i>
		</div>
	`,
	styles:[`
		.voteWrapper{
			width:10px;
			text-align:center;
			color:#999;
		}
		.glyphicon-menu-up{
			color:#ccc;
			cursor:pointer;
		}
		.glyphicon-menu-down{
			color:#ccc;
			cursor:pointer;
		}
		.highlighted{
			color:orange;
			cursor:pointer;
		}
	`]
})

export class VoterComponent{
	@Input() votePoints=10;
	@Input() myVote=0;
	isUp=false;
	isDown=false;

	constructor(){
		console.log(this.myVote)
		if(this.myVote === 1) this.isUp = true;
		else if (this.myVote === -1) this.isDown = true;
	}

	onClickUp(){
		if(!this.isUp){
			if(this.isDown) this.isDown=false;
			else this.isUp=true;
			this.votePoints=this.votePoints+1;
		}
	}

	onClickDown(){
		if(!this.isDown){
			if(this.isUp) this.isUp=false;
			else this.isDown=true;
			this.votePoints=this.votePoints-1;
		}
	}
}