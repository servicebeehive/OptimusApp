import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedPage } from './authorized.page';


const routes: Routes = [
  {
    path: '',
    component: AuthorizedPage,
    children:[
      {
        path:'dashboard',
        children:[
          {
            path:'',
            loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
          }
        ]
      },
      {
        path:'account-setting',
        children:[
          {
            path:'',
            loadChildren: () => import('./account-setting/account-setting.module')
            .then( m => m.AccountSettingPageModule)
          }
        ]
      },
      {
        path:'withdraw',
        children:[
          {
            path:'',
            loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
          }
        ]
      },
      {
        path:'purchase-flow',
        children:[
          {
            path:'',
            loadChildren: () => import('./purchase-flow/purchase-flow.module').then(m=>m.PurchaseFlowPageModule)
          }
        ]
      },
      {
        path:'netwoking',
        children:[
          {
            path:'',
            loadChildren: () => import('./networking/networking.module').then( m => m.NetworkingPageModule)
          }
        ]
      }
    ]
  },
  {
    path:'authorized/dashboard',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedPageRoutingModule {}
