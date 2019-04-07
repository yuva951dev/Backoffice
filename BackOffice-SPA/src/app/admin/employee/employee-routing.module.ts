import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
const employeeRoutes: Routes = [
  {
    path: '', component: EmployeesListComponent,
  },
   { path: 'add', component: AddEmployeeComponent},
   { path: 'edit', component: EditEmployeeComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }
