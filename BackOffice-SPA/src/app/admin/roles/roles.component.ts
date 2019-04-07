import { Component, OnInit } from '@angular/core';
import { RolesService } from './roles.service';
import { RolesDto } from './roles-dto';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table-settings'
import { ToastMessageService } from 'src/app/common/services/toast-message.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles:RolesDto[];
  role:RolesDto;
  source: LocalDataSource;
  settings = tableData.settings;
  constructor(private roleService: RolesService,private toastr: ToastMessageService) {
    this.source = new LocalDataSource();
    this.roleService.getRoles()
    .subscribe(data => this.source.load(data));
   }
   
  ngOnInit() {
    //this.getHeroes();
    //this.source.load(this.roles);
  }

  getHeroes(): void {
    this.roleService.getRoles()
    .subscribe(roles => this.roles = roles);
  }
  onCreateConfirm(event) {
     this.role=event.newData as RolesDto;
     this.role.RoleId=0;
     console.log(this.role);
     this.roleService.addRole(this.role).subscribe(
       res=>{
         console.log(res);
         this.toastr.showSuccess('Role', this.role.RoleName+' Created Successfully');
        event.confirm.resolve(res as RolesDto);
       },
       err=>{
         this.toastr.showError('Role', 'Please try again');
         console.log(err);
       }
     )
     
     
    
  }
  onDeleteConfirm(event) {
    this.role=event.data as RolesDto;
     
     console.log(this.role);
    this.roleService.deleteHero(this.role).subscribe(
      res=>{
        console.log(res);
        this.toastr.showSuccess('Role', this.role.RoleName+' Deleted Successfully');
       event.confirm.resolve(res as RolesDto);
      },
      err=>{
        this.toastr.showError('Role', 'Please try again');
        console.log(err);
      }
    )
   
  }

  onSaveConfirm(event) {
    this.role=event.newData as RolesDto;
     
     console.log(this.role);
     this.roleService.updateRole(this.role).subscribe(
       res=>{
         console.log(res);
         this.toastr.showSuccess('Role', this.role.RoleName+' Updated Successfully');
        event.confirm.resolve(res as RolesDto);
       },
       err=>{
        this.toastr.showError('Role', 'Please try again');
         console.log(err);
       }
     )
  }
}
