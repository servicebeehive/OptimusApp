import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/common/header/header.module';
import { NgMarqueeModule } from 'ng-marquee';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    NgMarqueeModule
    
  ],
  declarations: [HomePage],
  providers:[]
})
export class HomePageModule {}
