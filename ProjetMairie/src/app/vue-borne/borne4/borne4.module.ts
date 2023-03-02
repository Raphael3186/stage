import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne4PageRoutingModule } from './borne4-routing.module';

import { Borne4Page } from './borne4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne4PageRoutingModule
  ],
  declarations: [Borne4Page]
})
export class Borne4PageModule {}
