import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowMiningPageRoutingModule } from './know-mining-routing.module';

import { KnowMiningPage } from './know-mining.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowMiningPageRoutingModule,
    HeaderModule
  ],
  declarations: [KnowMiningPage]
})
export class KnowMiningPageModule {}
