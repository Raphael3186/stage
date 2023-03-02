import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Indice2PageRoutingModule } from './indice2-routing.module';

import { Indice2Page } from './indice2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Indice2PageRoutingModule
  ],
  declarations: [Indice2Page]
})
export class Indice2PageModule {}
