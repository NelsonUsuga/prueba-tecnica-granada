import { Component } from '@angular/core';
import { UsuariosService } from './../servicios/usuarios.service';
import { Router } from '@angular/router';


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
  mensaje: string;

  valido: boolean;

  datos: any = new Object;

  constructor(private http: UsuariosService, private router: Router) {
    this.nombre = '';
    this.usuario = '';
    this.telefono = '';
    this.correo = '';
    this.mensaje = '';

    this.valido = false;

    this.datos = new Object;
  }

  grabarUsuario() {

    if (!this.validarUsuario()) {
      return;
    }

    this.datos.name = this.nombre;
    this.datos.username = this.usuario;
    this.datos.phone = this.telefono;
    this.datos.email = this.correo;

    this.http.grabarUsuario(this.datos).subscribe(
            dato => dato,
            err => alert(err),
            () => { alert('Grabado con éxito'); this.router.navigate(['/listarusuarios']); }
    );
  }

  validarUsuario() {

        this.mensaje = '';
        this.valido = true;

        if (this.nombre === '') {
          this.valido = false;
          this.mensaje = 'Faltan Nombre.';
        }else if (this.usuario === '') {
          this.valido = false;
          this.mensaje = 'Faltan Usuario.';
        }else if (isNaN(Number(this.telefono)) || (this.telefono.length < 6 && this.telefono.length > 0)) {
          this.valido = false;
          this.mensaje = 'Teléfono incorrecto, mínimo 6 números.';
        }

        return this.valido;
}

}
