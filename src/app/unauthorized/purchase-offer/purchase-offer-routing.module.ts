import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseOfferPage } from './purchase-offer.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOfferPageRoutingModule {}
