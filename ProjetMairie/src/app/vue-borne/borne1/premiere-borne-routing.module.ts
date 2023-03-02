import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiereBornePage } from './premiere-borne.page';

const routes: Routes = [
  {
    path: '',
    component: PremiereBornePage
  },  {
    path: 'indice1',
    loadChildren: () => import('./indicesBorne1/indice1/indice1.module').then( m => m.Indice1PageModule)
  },
  {
    path: 'indice2',
    loadChildren: () => import('./indicesBorne1/indice2/indice2.module').then( m => m.Indice2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiereBornePageRoutingModule {}
