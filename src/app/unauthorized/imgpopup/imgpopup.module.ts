import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgpopupPageRoutingModule } from './imgpopup-routing.module';

import { ImgpopupPage } from './imgpopup.page';
import { HeaderModule } from 'src/app/common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgpopupPageRoutingModule,
    HeaderModule
  ],
  declarations: [ImgpopupPage]
})
export class ImgpopupPageModule {}
