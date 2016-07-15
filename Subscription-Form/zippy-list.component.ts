import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
	selector:'zippy-list',
	template:`
		<zippy [title]="'Some amazing title'">Some amazing body</zippy>
		<zippy [title]="'Some other amazing title'">Some other amazing body</zippy>
	`,
	directives:[ZippyComponent]
})
export class ZippyListComponent{

}