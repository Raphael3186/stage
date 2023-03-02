import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Indice1Page } from './indice1.page';

const routes: Routes = [
  {
    path: '',
    component: Indice1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Indice1PageRoutingModule {}
