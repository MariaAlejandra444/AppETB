import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },

  {
    path: 'olvidoC',
    loadChildren: () => import('./olvidoC/olvidoC.module').then( m => m.OlvidoCPageModule)
  },
  {
    path: 'mainJuego',
    loadChildren: () => import('./mainJuego/mainJuego.module').then( m => m.MainJuegoPageModule)
  },  {
    path: 'quest1',
    loadChildren: () => import('./games/quest1/quest1.module').then( m => m.Quest1PageModule)
  },
  {
    path: 'quest2',
    loadChildren: () => import('./games/quest2/quest2.module').then( m => m.Quest2PageModule)
  },
  {
    path: 'quest3',
    loadChildren: () => import('./games/quest3/quest3.module').then( m => m.Quest3PageModule)
  },
  {
    path: 'quest4',
    loadChildren: () => import('./games/quest4/quest4.module').then( m => m.Quest4PageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
