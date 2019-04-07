import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Starter Page',
        urls: [
			{title: 'Dashboard',url: '/dashboard'},
			{title: 'Starter Page'}
		]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
		CommonModule,
		HttpClientModule, 
		Ng2SmartTableModule,
		NgxDatatableModule,
    	RouterModule.forChild(routes)
	],
	providers:[],
	declarations: [StarterComponent]
})
export class StarterModule { }