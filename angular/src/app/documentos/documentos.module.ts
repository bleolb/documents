import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentoComponent } from './documento/documento.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';


@NgModule({
  declarations: [DocumentoComponent, ListaDocumentosComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule
  ]
})
export class DocumentosModule { }
