import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthorizedPage } from './unauthorized.page';

const routes: Routes = [
  {
    path: 'unauthorized',
    component: UnauthorizedPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'purchase-offer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./purchase-offer/purchase-offer.module').then(
                (m) => m.PurchaseOfferPageModule
              ),
          },
        ],
      },
      {
        path: 'know-mining',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./know-mining/know-mining.module').then(
                (m) => m.KnowMiningPageModule
              ),
          },
        ],
      },
      {
        path: 'why-optimus',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./why-optimus/why-optimus.module').then(
                (m) => m.WhyOptimusPageModule
              ),
          },
        ],
      },
      {
        path: 'about-networking',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./about-networking/about-networking.module').then(
                (m) => m.AboutNetworkingPageModule
              ),
          },
        ],
      },
    ],
  },

  {
    path: '',
    redirectTo: 'unauthorized/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'verify-otp',
    loadChildren: () =>
      import('./verify-otp/verify-otp.module').then(
        (m) => m.VerifyOtpPageModule
      ),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/calculator.module').then(
        (m) => m.CalculatorPageModule
      ),
  },  {
    path: 'imgpopup',
    loadChildren: () => import('./imgpopup/imgpopup.module').then( m => m.ImgpopupPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthorizedPageRoutingModule {}
