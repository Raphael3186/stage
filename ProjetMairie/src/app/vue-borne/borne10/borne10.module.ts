import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne10PageRoutingModule } from './borne10-routing.module';

import { Borne10Page } from './borne10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne10PageRoutingModule
  ],
  declarations: [Borne10Page]
})
export class Borne10PageModule {}
