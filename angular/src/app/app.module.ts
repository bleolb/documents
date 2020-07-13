import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SocketIoModule } from 'ngx-socket-io'
import { WebServicesService } from './servicios/web-service.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule
  ],
  providers: [WebServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
