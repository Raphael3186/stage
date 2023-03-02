import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne5PageRoutingModule } from './borne5-routing.module';

import { Borne5Page } from './borne5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne5PageRoutingModule
  ],
  declarations: [Borne5Page]
})
export class Borne5PageModule {}
