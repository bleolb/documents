import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DocumentosService } from '../../servicios/documentos.service';
import { PermisosService } from '../../servicios/permisos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.scss']
})
export class ListaDocumentosComponent implements  OnInit , OnDestroy{
  docs: Observable<string[]>;
  currentDoc: string;
  docAuth: any;
  private _docSubscribe: Subscription;
  constructor(private documentosService: DocumentosService, 
    private router: Router,
    private servicesPermisos: PermisosService) { }


  ngOnInit() {
    this.docs = this.documentosService.documents;
    this._docSubscribe = this.documentosService.dataActual.subscribe(
      (doc) => ((this.currentDoc = doc.id), (this.docAuth = doc))
    );
  }
  ngOnDestroy(){
    this._docSubscribe.unsubscribe();
  } 
  getDoc(id: string) {
    this.documentosService.getDoc(id);
  
    let roomName = prompt('Access name');
  
    if (this.docAuth.roomName === roomName) {
      let roomPassword = prompt('Room password');
  
      if (this.docAuth.roomPassword === roomPassword) {
        this.documentosService.getDoc(id);
      } else {
        alert('paswword incorrecto');
      }
    } else {
      alert('no existe la sala');
    }
  }
  
  addDoc() {
    let roomName = prompt('Nombre del documento?'),
      roomPassword = prompt('Password?');
  
    this.documentosService.addDoc({
      id: '',
      doc: '',
      userName: '',
      roomName,
      roomPassword,
    });
  }
}
