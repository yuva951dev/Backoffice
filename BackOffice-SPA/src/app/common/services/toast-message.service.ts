import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title:string,message:string) {
    this.toastr.success(message, title);
  }

  showError(title:string,message:string){
    this.toastr.error(message, title);
  }
}
