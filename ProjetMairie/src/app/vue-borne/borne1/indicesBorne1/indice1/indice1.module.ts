import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Indice1PageRoutingModule } from './indice1-routing.module';

import { Indice1Page } from './indice1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Indice1PageRoutingModule
  ],
  declarations: [Indice1Page]
})
export class Indice1PageModule {}
