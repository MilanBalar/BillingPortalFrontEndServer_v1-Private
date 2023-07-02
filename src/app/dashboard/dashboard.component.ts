import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { SnackbarService } from '../services/snackbar.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { error } from 'console';
import { GlobalConstants } from '../shared/global-constants';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	data: any;
	responseMessage: any;

	ngAfterViewInit() { }

	constructor(private dashboardService: DashboardService,
		private ngxUiLoaderService: NgxUiLoaderService,
		private snackbarService: SnackbarService
	) {
		this.ngxUiLoaderService.start();
		this.dashBoardData()
	}

	dashBoardData() {
		this.dashboardService.getDashBoardDetails().subscribe((response: any) => {
			this.ngxUiLoaderService.stop();
			this.data = response;
		}, (error: any) => {
			this.ngxUiLoaderService.stop();
			console.log(error);
			if (error.error?.message) {
				this.responseMessage = error.error?.message;
			} else {
				this.responseMessage = GlobalConstants.genericError;
			}
			this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error)
		})

	}

}
