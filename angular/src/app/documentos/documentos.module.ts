import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentoComponent } from './documento/documento.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { SocketIoModule } from 'ngx-socket-io';
import { SocketService } from '../servicios/socket.service';
import { DocumentosComponent } from './documentos.component';


@NgModule({
  declarations: [
  DocumentoComponent, 
  ListaDocumentosComponent,
  DocumentosComponent 
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    FormsModule,
    SocketIoModule,
 
  ],
  providers: [SocketService]
})
export class DocumentosModule { }
