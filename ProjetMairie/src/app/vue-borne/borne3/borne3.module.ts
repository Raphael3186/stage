import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne3PageRoutingModule } from './borne3-routing.module';

import { Borne3Page } from './borne3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne3PageRoutingModule
  ],
  declarations: [Borne3Page]
})
export class Borne3PageModule {}
