import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./unauthorized/unauthorized.module').then( m => m.UnauthorizedPageModule)
  },
  {
    path: 'authorized',
    loadChildren: () => import('./authorized/authorized.module').then( m => m.AuthorizedPageModule)
  },  {
    path: 'menu',
    loadChildren: () => import('./common/menu/menu.module').then( m => m.MenuPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
