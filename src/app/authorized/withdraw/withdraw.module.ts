import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawPageRoutingModule } from './withdraw-routing.module';

import { WithdrawPage } from './withdraw.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [WithdrawPage],
})
export class WithdrawPageModule {}
