import { Injectable } from '@angular/core';
import { PermisosService } from './permisos.service';
import { Socket } from 'ngx-socket-io'

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket{
  constructor(private permisos:PermisosService) { 
    super({url:'http://localhost:27017',options:{
      query: `token=${permisos.getToken()}&sessionID=${permisos.getSessionId()}`,
      }
    })
  }
}
