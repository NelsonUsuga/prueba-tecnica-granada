import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirMinuscula'
})
export class ConvertirMinusculaPipe implements PipeTransform {

  transform(correo: string): string {
    return correo.toLowerCase();
  }

}
