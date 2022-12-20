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
  },
  {
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
  {
    path: 'pagina-ok',
    loadChildren: () => import('./paginas-ok/pagina-ok/pagina-ok.module').then( m => m.PaginaOkPageModule)
  },
  {
    path: 'pagina-ok2',
    loadChildren: () => import('./paginas-ok/pagina-ok2/pagina-ok2.module').then( m => m.PaginaOk2PageModule)
  },
  {
    path: 'pagina-ok3',
    loadChildren: () => import('./paginas-ok/pagina-ok3/pagina-ok3.module').then( m => m.PaginaOk3PageModule)
  },
  {
    path: 'quest5',
    loadChildren: () => import('./games/quest5/quest5.module').then( m => m.Quest5PageModule)
  },
  {
    path: 'pagina-ok4',
    loadChildren: () => import('./paginas-ok/pagina-ok4/pagina-ok4.module').then( m => m.PaginaOk4PageModule)
  },
  {
    path: 'quest6',
    loadChildren: () => import('./games/quest6/quest6.module').then( m => m.Quest6PageModule)
  },
  {
    path: 'pagina-mal',
    loadChildren: () => import('./paginas-mal/pagina-mal/pagina-mal.module').then( m => m.PaginaMalPageModule)
  },
  {
    path: 'pagina-mal2',
    loadChildren: () => import('./paginas-mal/pagina-mal2/pagina-mal2.module').then( m => m.PaginaMal2PageModule)
  },
  {
    path: 'pagina-mal3',
    loadChildren: () => import('./paginas-mal/pagina-mal3/pagina-mal3.module').then( m => m.PaginaMal3PageModule)
  },
  {
    path: 'pagina-mal4',
    loadChildren: () => import('./paginas-mal/pagina-mal4/pagina-mal4.module').then( m => m.PaginaMal4PageModule)
  },
  {
    path: 'pagina-mal5',
    loadChildren: () => import('./paginas-mal/pagina-mal5/pagina-mal5.module').then( m => m.PaginaMal5PageModule)
  },
  {
    path: 'pagina-mal6',
    loadChildren: () => import('./paginas-mal/pagina-mal6/pagina-mal6.module').then( m => m.PaginaMal6PageModule)
  },
 
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
