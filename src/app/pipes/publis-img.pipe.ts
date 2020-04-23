import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publisImg'
})
export class PublisImgPipe implements PipeTransform {

  transform(img: string, tipo: string = 'img1'): any {

    let url = environment.url + '/img';

    if (!img) {
      return url + '/publicacion/xxx';
    }

    switch (tipo) {
      case 'img1':
           url += '/publicacion/img1/' + img;
           console.log(url);
      break;

      case 'img2':
           url += '/publicacion/img2/' + img;
      break;

      case 'img3':
          url += '/publicacion/img3/' + img;
      break;

      case 'img4':
          url += '/publicacion/img4/' + img;
      break;

      case 'img5':
          url += '/publicacion/img5/' + img;
      break;

      case 'img6':
          url += '/publicacion/img6/' + img;
      break;
      default:
        console.log('tipo de imagen no existe');
        url += '/publicacion/xxx';
    }
    return url;
  }

}
