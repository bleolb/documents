import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DocumentosService } from '../../servicios/documentos.service';
import jwt_decode from 'jwt-decode';
import { PermisosService } from '../../servicios/permisos.service';
import { Documentos } from '../../modelo/documentos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

    currentUserName: Observable<string>;
  document: Documentos;
  private _docSubscribe: Subscription;

  constructor(
    private docsService: DocumentosService,
    private permissions: PermisosService,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this._docSubscribe = this.docsService.currentDoc
      .pipe(
        startWith({
          id: '',
          doc: 'Cree o escoja un documento',
          userName: '',
          roomName: '',
          roomPassword: '',
        })
      )
      .subscribe((document) => (this.document = document));
  }

  ngOnDestroy() {
    this._docSubscribe.unsubscribe();
  }

  editDoc() {
    this._getuser();
    this.docsService.editDoc(this.document);
  }

  private _getuser() {
    let token = this.permissions.getToken();
    let decoded = jwt_decode(token);

    this.document.userName = decoded.data.name;
  }
  goDocumentosLista() {
    this.router.navigate(['/documentos/documentos-lista']);
  }
}

