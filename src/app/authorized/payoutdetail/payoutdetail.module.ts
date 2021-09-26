import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayoutdetailPageRoutingModule } from './payoutdetail-routing.module';

import { PayoutdetailPage } from './payoutdetail.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutdetailPageRoutingModule,
    HeaderModule
  ],
  declarations: [PayoutdetailPage]
})
export class PayoutdetailPageModule {}
