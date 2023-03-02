import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'premiere-borne',
    loadChildren: () => import('./vue-borne/borne1/premiere-borne.module').then( m => m.PremiereBornePageModule)
  },
  {
    path: 'regle-du-jeu',
    loadChildren: () => import('./regle-du-jeu/regle-du-jeu.module').then( m => m.RegleDuJeuPageModule)
  },
  {
    path: 'classement',
    loadChildren: () => import('./classement/classement.module').then( m => m.ClassementPageModule)
  },
  {
    path: 'borne2',
    loadChildren: () => import('./vue-borne/borne2/borne2.module').then( m => m.Borne2PageModule)
  },
  {
    path: 'borne3',
    loadChildren: () => import('./vue-borne/borne3/borne3.module').then( m => m.Borne3PageModule)
  },
  {
    path: 'borne4',
    loadChildren: () => import('./vue-borne/borne4/borne4.module').then( m => m.Borne4PageModule)
  },
  {
    path: 'borne5',
    loadChildren: () => import('./vue-borne/borne5/borne5.module').then( m => m.Borne5PageModule)
  },
  {
    path: 'borne6',
    loadChildren: () => import('./vue-borne/borne6/borne6.module').then( m => m.Borne6PageModule)
  },
  {
    path: 'borne7',
    loadChildren: () => import('./vue-borne/borne7/borne7.module').then( m => m.Borne7PageModule)
  },
  {
    path: 'borne8',
    loadChildren: () => import('./vue-borne/borne8/borne8.module').then( m => m.Borne8PageModule)
  },
  {
    path: 'borne9',
    loadChildren: () => import('./vue-borne/borne9/borne9.module').then( m => m.Borne9PageModule)
  },
  {
    path: 'derniere-borne',
    loadChildren: () => import('./derniere-borne/derniere-borne.module').then( m => m.DerniereBornePageModule)
  },
  {
    path: 'transition/:id',
    loadChildren: () => import('./transition/transition.module').then( m => m.TransitionPageModule)
  },  {
    path: 'borne10',
    loadChildren: () => import('./vue-borne/borne10/borne10.module').then( m => m.Borne10PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
