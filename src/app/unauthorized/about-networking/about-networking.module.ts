import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutNetworkingPageRoutingModule } from './about-networking-routing.module';

import { AboutNetworkingPage } from './about-networking.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutNetworkingPageRoutingModule,
    HeaderModule
  ],
  declarations: [AboutNetworkingPage]
})
export class AboutNetworkingPageModule {}
