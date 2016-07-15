import {Component, Input} from 'angular2/core';
import {LikeButtonComponent} from './like-button.component';

@Component({
	selector:'tweet',
	template:`
		<div class="media">
			<div class="media-left">
				<a href="#">
				<img class="media-object" src="{{data.imageUrl}}">
				</a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">{{data.author}} <span class="userNameTag">{{data.userName}}</span></h4>
				<div class='dataContent'>{{data.body}}</div>
				<like-button [numberOfLikes]='data.numberOfLikes' [isLiked]='data.isLiked'></like-button>
			</div>
		</div>
	`,
	directives:[LikeButtonComponent],
	styles:[`
		.media{
			margin-left:5px;
			margin-bottom:10px;
		}
		.media-object{
			border-radius:10px;
		}
		.userNameTag{
			color:#ccc;
		}
	`]
})
export class TweetComponent{
	@Input() data:any;
}