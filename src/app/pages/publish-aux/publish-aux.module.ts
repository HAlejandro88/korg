import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishAuxPageRoutingModule } from './publish-aux-routing.module';

import { PublishAuxPage } from './publish-aux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    PublishAuxPageRoutingModule
  ],
  declarations: [PublishAuxPage]
})
export class PublishAuxPageModule {}
