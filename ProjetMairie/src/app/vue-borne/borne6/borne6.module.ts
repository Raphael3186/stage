import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne6PageRoutingModule } from './borne6-routing.module';

import { Borne6Page } from './borne6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne6PageRoutingModule
  ],
  declarations: [Borne6Page]
})
export class Borne6PageModule {}
