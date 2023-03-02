import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Borne7PageRoutingModule } from './borne7-routing.module';

import { Borne7Page } from './borne7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Borne7PageRoutingModule
  ],
  declarations: [Borne7Page]
})
export class Borne7PageModule {}
