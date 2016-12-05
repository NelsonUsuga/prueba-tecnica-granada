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
}
