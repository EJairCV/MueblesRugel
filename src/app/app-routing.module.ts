import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"nosotros",component:NosotrosComponent},
  {path:"ubicacion",component:UbicacionComponent},
  {path:"detalle/:id",component:DetalleComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
