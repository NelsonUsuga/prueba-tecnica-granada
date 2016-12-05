import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrabarusuarioComponent } from './grabarusuario.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosService } from './../servicios/usuarios.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: 'grabarusuario', component: GrabarusuarioComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [GrabarusuarioComponent],
  providers: [UsuariosService]
})
export class GrabarusuarioModule { }
