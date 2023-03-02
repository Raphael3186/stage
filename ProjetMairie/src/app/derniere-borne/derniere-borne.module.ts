import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DerniereBornePageRoutingModule } from './derniere-borne-routing.module';

import { DerniereBornePage } from './derniere-borne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DerniereBornePageRoutingModule
  ],
  declarations: [DerniereBornePage]
})
export class DerniereBornePageModule {}
