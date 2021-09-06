import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutNetworkingPage } from './about-networking.page';

const routes: Routes = [
  {
    path: '',
    component: AboutNetworkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutNetworkingPageRoutingModule {}
