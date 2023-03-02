import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne2PageRoutingModule } from './borne2-routing.module';

import { Borne2Page } from './borne2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne2PageRoutingModule
  ],
  declarations: [Borne2Page]
})
export class Borne2PageModule {}
