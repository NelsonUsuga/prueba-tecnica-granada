import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  listarUsuarios() {
        return this.http.get(this.baseUrl + '/users').map(res => res.json());
    }

    grabarUsuario(datos) {
        let parametro = `{
            "name": ` + datos.nombre + `,
            "username": "` + datos.usuario + `",
            "email": "` + datos.correo + `",
            "phone": "` + datos.telefono + `"
          }`;

      return this.http.post(this.baseUrl + '/posts', parametro).map(res => res.json());
    }
}
