import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseOfferPageRoutingModule } from './purchase-offer-routing.module';

import { PurchaseOfferPage } from './purchase-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseOfferPageRoutingModule
  ],
  declarations: [PurchaseOfferPage]
})
export class PurchaseOfferPageModule {}
