import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentoComponent } from './documento/documento.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { DocumentosComponent } from './documentos.component';
import { SocketIoModule } from 'ngx-socket-io';
//import { WebServicesService } from '../servicios';


@NgModule({
  declarations: [DocumentoComponent, ListaDocumentosComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    FormsModule,
    DocumentosComponent,
    SocketIoModule
  ],
  //providers: [WebServicesService]
})
export class DocumentosModule { }
