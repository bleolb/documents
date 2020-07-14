import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './documento/documento.component';
import { ListaDocumentosComponent} from './lista-documentos/lista-documentos.component';
import { DocumentosComponent } from './documentos.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path:'', component:DocumentoComponent },
  { path: 'lista', component:ListaDocumentosComponent},
  { path: 'documento', component:DocumentosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
