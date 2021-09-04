import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnowMiningPageRoutingModule } from './know-mining-routing.module';

import { KnowMiningPage } from './know-mining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnowMiningPageRoutingModule
  ],
  declarations: [KnowMiningPage]
})
export class KnowMiningPageModule {}
