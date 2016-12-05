import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarusuariosComponent } from './listarusuarios.component';

import { RouterModule, Routes } from '@angular/router';
import { UsuariosService } from './../servicios/usuarios.service';
import { OcultarApellidoPipe } from './ocultar-apellido.pipe';

const routes: Routes = [
    { path: 'listarusuarios', component: ListarusuariosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [ListarusuariosComponent, OcultarApellidoPipe],
  providers: [UsuariosService]
})
export class ListarusuariosModule { }
