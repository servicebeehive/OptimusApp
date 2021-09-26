import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutdetailPage } from './payoutdetail.page';

const routes: Routes = [
  {
    path: '',
    component: PayoutdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutdetailPageRoutingModule {}
