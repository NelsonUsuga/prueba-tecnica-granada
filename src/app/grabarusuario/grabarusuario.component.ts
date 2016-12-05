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

  datos: any = new Object;

  constructor(private http: UsuariosService, private router: Router) { }

  grabarUsuario() {
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

}
