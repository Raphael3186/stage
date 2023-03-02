import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne9PageRoutingModule } from './borne9-routing.module';

import { Borne9Page } from './borne9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne9PageRoutingModule
  ],
  declarations: [Borne9Page]
})
export class Borne9PageModule {}
