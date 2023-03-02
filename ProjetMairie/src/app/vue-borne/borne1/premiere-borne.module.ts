import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiereBornePageRoutingModule } from './premiere-borne-routing.module';

import { PremiereBornePage } from './premiere-borne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiereBornePageRoutingModule
  ],
  declarations: [PremiereBornePage]
})
export class PremiereBornePageModule {}
