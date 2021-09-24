import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawdetailPageRoutingModule } from './withdrawdetail-routing.module';

import { WithdrawdetailPage } from './withdrawdetail.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawdetailPageRoutingModule, HeaderModule
  ],
  declarations: [WithdrawdetailPage]
})
export class WithdrawdetailPageModule {}
