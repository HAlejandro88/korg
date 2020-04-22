import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImg'
})
export class ProductImgPipe implements PipeTransform {

  transform(img: string, tipo: string = 'img'): any {

    let url = environment.url + '/img';

    if (!img) {
      return url + '/producto/xxx';
    }

    switch (tipo) {
      case 'img':
           url += '/producto/img/' + img;
           console.log(url);
      break;

      case 'imgLateralD':
           url += '/producto/imgLateralD/' + img;
      break;

      case 'imgLateralI':
          url += '/producto/imgLateralI/' + img;
      break;

      case 'imgAtras':
          url += '/producto/imgAtras/' + img;
      break;

      case 'imgSuperior':
          url += '/producto/imgSuperior/' + img;
      break;
      default:
        console.log('tipo de imagen no existe');
        url += '/producto/xxx';
    }
    return url;
  }

}
