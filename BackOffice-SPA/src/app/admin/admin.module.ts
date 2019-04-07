import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RolesComponent } from './roles/roles.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [AdminDashboardComponent, RolesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SmartTableModule,
		NgxDatatableModule,
  ]
})
export class AdminModule { }
