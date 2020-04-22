import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'nosotros'): any {

    let url = environment.url + '/img';

    if (!img) {
      return url + '/usuarios/xxx';
    }

    switch (tipo) {
      case 'marca':
           url += '/marcas/' + img;
           console.log(url);
      break;

      case 'categoria':
           url += '/categorias/' + img;
      break;

      case 'producto':
          url += '/productos/' + img;
      break;

      case 'noticia':
          url += '/noticias/' + img;
      break;

      case 'nosotros':
          url += '/nosotros/' + img;
      break;
      case 'publicaciones':
        url += '/publicaciones/' + img;
      break;
      default:
        console.log('tipo de imagen no existe');
        url += '/usuarios/xxx';
    }
    return url;
  }

}
