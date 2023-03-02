import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne8PageRoutingModule } from './borne8-routing.module';

import { Borne8Page } from './borne8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne8PageRoutingModule
  ],
  declarations: [Borne8Page]
})
export class Borne8PageModule {}
