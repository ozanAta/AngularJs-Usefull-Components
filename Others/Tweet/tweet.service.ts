export class TweetService{
	getTweets(){
		var firstTweet = {
			author:'Ozan',
			userName:'@ozata',
			body:'Vengance shall be mine!',
			numberOfLikes:4,
			imageUrl:'http://lorempixel.com/100/100/people?1',
			isLiked: true
		}
		var secondTweet = {
			author:'Gülay',
			userName:'@g.didir',
			body:'I love cats!',
			numberOfLikes:0,
			imageUrl:'http://lorempixel.com/100/100/people?2',
			isLiked: true
		}
		var thirdTweet = {
			author:'Berlin',
			userName:'@catass',
			body:'Meow!',
			numberOfLikes:105,
			imageUrl:'http://lorempixel.com/100/100/people?3',
			isLiked: false
		}
		return [firstTweet, secondTweet, thirdTweet];
	}
}