import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarApellido'
})
export class OcultarApellidoPipe implements PipeTransform {

  transform(usuario: string): string {
    return usuario.split(' ')[0];
  }

}
