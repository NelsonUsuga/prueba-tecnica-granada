import { Component } from '@angular/core';
import { UsuariosService } from './../servicios/usuarios.service';


@Component({
  selector: 'app-grabarusuario',
  templateUrl: './grabarusuario.component.html',
  styleUrls: ['./grabarusuario.component.css']
})
export class GrabarusuarioComponent{

  nombre: string;
  usuario: string;
  telefono: string;
  correo: string;

  datos: any = new Object;

  constructor(private http: UsuariosService) { }

  grabarUsuario() {
    this.datos.nombre = this.nombre;
    this.datos.usuario = this.usuario;
    this.datos.telefono = this.telefono;
    this.datos.correo = this.correo;

    this.http.grabarUsuario(this.datos).subscribe(
            dato => dato,
            err => alert(err)
);
  }

}
