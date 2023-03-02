import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Indice2Page } from './indice2.page';

const routes: Routes = [
  {
    path: '',
    component: Indice2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Indice2PageRoutingModule {}
