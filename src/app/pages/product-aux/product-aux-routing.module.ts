import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAuxPage } from './product-aux.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAuxPageRoutingModule {}
