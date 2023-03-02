import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Borne7Page } from './borne7.page';

const routes: Routes = [
  {
    path: '',
    component: Borne7Page
  },  {
    path: 'indice1',
    loadChildren: () => import('./indicesBorne7/indice1/indice1.module').then( m => m.Indice1PageModule)
  },
  {
    path: 'indice2',
    loadChildren: () => import('./indicesBorne7/indice2/indice2.module').then( m => m.Indice2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Borne7PageRoutingModule {}
