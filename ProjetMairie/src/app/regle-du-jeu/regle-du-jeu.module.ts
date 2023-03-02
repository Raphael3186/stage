import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegleDuJeuPageRoutingModule } from './regle-du-jeu-routing.module';

import { RegleDuJeuPage } from './regle-du-jeu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegleDuJeuPageRoutingModule
  ],
  declarations: [RegleDuJeuPage]
})
export class RegleDuJeuPageModule {}
