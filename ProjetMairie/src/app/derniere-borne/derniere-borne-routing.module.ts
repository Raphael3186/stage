import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DerniereBornePage } from './derniere-borne.page';

const routes: Routes = [
  {
    path: '',
    component: DerniereBornePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DerniereBornePageRoutingModule {}
