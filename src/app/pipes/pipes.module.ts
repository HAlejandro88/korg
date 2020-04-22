import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { ProductImgPipe } from './product-img.pipe';


@NgModule({
    declarations: [ImagenPipe, ProductImgPipe],
    imports: [],
    exports: [ImagenPipe, ProductImgPipe]
  })
  export class PipesModule { }