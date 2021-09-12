import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhyOptimusPageRoutingModule } from './why-optimus-routing.module';

import { WhyOptimusPage } from './why-optimus.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhyOptimusPageRoutingModule,
    HeaderModule
  ],
  declarations: [WhyOptimusPage]
})
export class WhyOptimusPageModule {}
