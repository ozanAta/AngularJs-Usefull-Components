import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name:'summary'})
export class SummaryPipe implements PipeTransform{
	transform(value: string, args: string[]){
	/*
		Expression below means: if we have 'args' and 'args' has an element , parse that element into integer, else set to 50.
	*/
		var limit = (args && args[0]) ? parseInt(args[0]) : 50;
		if(value){
			return value.substring(0,limit) + '...';
		}
	}
}

/*
	How to use ?
	add SummaryPipe to pipes array in the component, then use one of the following examples.
	{{someArray | summary}} use with default limit 50 characters.
	{{someArray | summary:10}} use with predefined limit.
*/