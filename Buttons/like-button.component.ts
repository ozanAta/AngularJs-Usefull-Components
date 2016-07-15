import {Component, Input} from 'angular2/core';

@Component({
	selector:'like-button',
	template:`
		<i class='glyphicon glyphicon-heart'
			[class.highlighted]='isLiked'
			(click)=onClick()>
		</i>
		<span>Number of Likes: {{numberOfLikes}}</span>
	`,
	styles:[`
		.glyphicon-heart{
			color:#ccc;
			cursor:pointer;
		}
		.highlighted{
			color:red; 
		}
	`]
})

export class LikeButtonComponent{
	@Input () numberOfLikes=10;
	@Input () isLiked=false;

	onClick(){
		if(this.isLiked) this.numberOfLikes = this.numberOfLikes-1;
		else this.numberOfLikes = this.numberOfLikes+1;
		this.isLiked= !this.isLiked;
	}

}