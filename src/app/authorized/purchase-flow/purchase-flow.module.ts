import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseFlowPageRoutingModule } from './purchase-flow-routing.module';

import { PurchaseFlowPage } from './purchase-flow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseFlowPageRoutingModule
  ],
  declarations: [PurchaseFlowPage]
})
export class PurchaseFlowPageModule {}
