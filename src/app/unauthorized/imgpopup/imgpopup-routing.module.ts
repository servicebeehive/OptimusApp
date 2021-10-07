import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgpopupPage } from './imgpopup.page';

const routes: Routes = [
  {
    path: '',
    component: ImgpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgpopupPageRoutingModule {}
