import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseFlowPage } from './purchase-flow.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseFlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseFlowPageRoutingModule {}
