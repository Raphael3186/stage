import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegleDuJeuPage } from './regle-du-jeu.page';

const routes: Routes = [
  {
    path: '',
    component: RegleDuJeuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegleDuJeuPageRoutingModule {}
