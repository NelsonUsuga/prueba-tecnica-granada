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
    this.datos.name = this.nombre;
    this.datos.username = this.usuario;
    this.datos.phone = this.telefono;
    this.datos.email = this.correo;

    this.http.grabarUsuario(this.datos).subscribe(
            dato => dato,
            err => alert(err),
            () => { alert('Grabado con éxito') }
);
  }

}
