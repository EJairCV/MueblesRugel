import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MuebleComponent } from './mueble/mueble.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    MuebleComponent,
    DetalleComponent,
    NosotrosComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
