import { Component } from '@angular/core';
import { SpinnerService } from './spinner-service';
	@Component({
	selector: 'spinner-component',
	template: `
	<div *ngIf="active" class="loadingScreen">
		<img src="http://cdn-data.motu.com/site/images/loading-bars2.gif" class="loadingImage">
	</div>`
	})	
export class SpinnerComponent {
  public active: boolean;

  public constructor(spinner: SpinnerService) {
    spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}