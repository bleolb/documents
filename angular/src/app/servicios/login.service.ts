import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebServicesService } from './web-service.service';
import { PermisosService } from './permisos.service'
import { Observable } from 'rxjs';
import { Data } from '../modelo/data'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url:string;
  constructor(
    private http:HttpClient,
    private servidor:WebServicesService,
    private permisos: PermisosService,
  ) {
    this.url = servidor.getUrl();
   }

   login(datalogin):Observable<Data>{
    return this.http.post<Data>(`${this.url}login`, datalogin);
   }

}
