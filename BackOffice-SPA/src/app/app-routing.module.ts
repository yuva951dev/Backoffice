import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/admin', pathMatch: 'full' },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
        { path: 'Employee', loadChildren: './admin/employee/employee.module#EmployeeModule' }

    ]
},
{
    path: '**',
    redirectTo: 'starter'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
