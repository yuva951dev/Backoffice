import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RolesComponent } from './roles/roles.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    
    // children: [
    //   {
    //     path: '',
    //     //canActivateChild: [AuthGuard],
    //     children: [
    //      // { path: 'dashboard', component: ManageCrisesComponent },
    //       { path: 'roles', component: RolesComponent },
    //       { path: '', component: AdminDashboardComponent }
    //     ]
    //   }
    // ]
  },
  { path:'roles', component:RolesComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
