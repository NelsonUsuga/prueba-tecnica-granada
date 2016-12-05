import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../servicios/usuarios.service'

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {

  usuarios: Array<Object>;

  constructor(private http: UsuariosService) { }

  //constructor() { }

  ngOnInit() {
    this.http.listarUsuarios().subscribe(
            dato => this.usuarios = dato,
            error => alert(error),
            () => console.log(this.usuarios)
        );
  }

}
