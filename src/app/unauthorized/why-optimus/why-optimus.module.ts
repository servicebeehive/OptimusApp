import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyOptimusPageRoutingModule } from './why-optimus-routing.module';

import { WhyOptimusPage } from './why-optimus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhyOptimusPageRoutingModule
  ],
  declarations: [WhyOptimusPage]
})
export class WhyOptimusPageModule {}
