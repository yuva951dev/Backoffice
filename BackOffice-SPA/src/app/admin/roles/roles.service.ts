import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RolesDto } from './roles-dto';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class RolesService {
  readonly baseUrl="http://localhost:1933/api/role";
  data:RolesDto[];
  constructor(private http:HttpClient) { }

  getRoles (): Observable<RolesDto[]> {
    return this.http.get<RolesDto[]>(this.baseUrl);
      // .pipe(
      //   tap(_ => this.log('fetched heroes')),
      //   catchError(this.handleError<RolesDto[]>('getHeroes', []))
      // );
  }
  
  addRole (role: RolesDto) {
    console.log(role);
    return this.http.post(this.baseUrl, role);
      
  }

  updateRole (role: RolesDto): Observable<any> {
    const id = typeof role === 'number' ? role : role.RoleId;
    const url = `${this.baseUrl}/${id}`;
    console.log(url);
    return this.http.put(url, role, httpOptions);
    
  }

  /** DELETE: delete the hero from the server */
  deleteHero (role: RolesDto | number) {
    
    const id = typeof role === 'number' ? role : role.RoleId;
    console.log('delete service'+ id);
    const url = `${this.baseUrl}/${id}`;
    console.log('delete service'+ url);
    return this.http.delete(url);
  }
}
