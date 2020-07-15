import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Documentos } from '../modelo/documentos';



@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  constructor(private socket: SocketService) {}
  currentDoc = this.socket.fromEvent<Documentos>('manageData');
  docs = this.socket.fromEvent<string[]>('getData');

  getDoc(id: string) {
    this.socket.emit('getDoc', id);
  }

  addDoc(doc) {
     if (this.socket.ioSocket.connected) {
      this.socket.emit('addDoc', doc);
     } else {
       alert('Invalid token');
     }
  }
  editDoc(doc: Documentos) {
    this.socket.emit('editDoc', doc);
  }

}
