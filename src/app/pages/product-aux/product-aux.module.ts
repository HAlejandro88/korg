import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAuxPageRoutingModule } from './product-aux-routing.module';

import { ProductAuxPage } from './product-aux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    ProductAuxPageRoutingModule
  ],
  declarations: [ProductAuxPage]
})
export class ProductAuxPageModule {}
