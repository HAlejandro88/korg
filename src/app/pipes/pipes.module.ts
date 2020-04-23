import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { ProductImgPipe } from './product-img.pipe';
import { PublisImgPipe } from './publis-img.pipe';


@NgModule({
    declarations: [ImagenPipe, ProductImgPipe, PublisImgPipe],
    imports: [],
    exports: [ImagenPipe, ProductImgPipe, PublisImgPipe]
  })
  export class PipesModule { }