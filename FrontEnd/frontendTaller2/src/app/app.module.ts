import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CrearContactoComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
