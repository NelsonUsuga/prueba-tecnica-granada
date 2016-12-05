import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarusuariosComponent } from './listarusuarios.component';

import { RouterModule, Routes } from '@angular/router';
import { UsuariosService } from './../servicios/usuarios.service'

const routes: Routes = [
    { path: 'listarusuarios', component: ListarusuariosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [ListarusuariosComponent],
  providers: [UsuariosService]
})
export class ListarusuariosModule { }
