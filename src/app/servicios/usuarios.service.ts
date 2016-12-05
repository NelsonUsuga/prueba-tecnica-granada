import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {


    /*Ejecutar base de datos JSON local
    Para poder guardar datos. https://github.com/typicode/json-server
    Instalación: sudo npm install -g json-server
    Ejecutar servicio: json-server --watch db.json
    Nota: se debe ejecutar dentro de la misma carpeta del proyecto.
          Este obtiene los datos a partir de una archivo json dentro
          de proyecto llamada db.json. Tal cual como se llame el archivo
          es como se debe ejecutar el comando.

          El servicio por defecto ejecuta en http://localhost:3000
          -p: para cambiar puerto
          -H: para cambiar host
    */
   // baseUrl: string = 'http://localhost:3000';
    baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  listarUsuarios() {
        return this.http.get(this.baseUrl + '/users').map(res => res.json());
    }

    grabarUsuario(datos) {

        /* Si se guarda en post no se actualiza los users.
           Decidí guardar en users para ver los cambios */
        // return this.http.post(this.baseUrl + '/posts', datos).map(res => res.json());
      return this.http.post(this.baseUrl + '/users', datos).map(res => res.json());
    }
}
