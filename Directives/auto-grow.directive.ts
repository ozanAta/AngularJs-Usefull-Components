import {Directive, ElementRef, Renderer} from 'angular2/core';
/*
	ElementRef: Gives us access to the host element.
	Renderer: We use to modify the element.
*/

@Directive({
	selector:' [autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})

export class AutoGrowDirective {
	constructor(private el:ElementRef, private renderer:Renderer){
		
	}	

	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
	}

}