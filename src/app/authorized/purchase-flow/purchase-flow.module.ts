import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseFlowPageRoutingModule } from './purchase-flow-routing.module';

import { PurchaseFlowPage } from './purchase-flow.page';
import { HeaderModule } from 'src/app/common/header/header.module';
import { IntegerInputDirectiveModule } from 'src/app/common/directives/integer-input/integer-input-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseFlowPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
    IntegerInputDirectiveModule,
  ],
  declarations: [PurchaseFlowPage],
})
export class PurchaseFlowPageModule {}
