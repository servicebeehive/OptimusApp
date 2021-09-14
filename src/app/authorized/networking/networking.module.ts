import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkingPageRoutingModule } from './networking-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { NetworkingPage } from './networking.page';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatButtonModule} from '@angular/material/button';
import { HeaderModule } from 'src/app/common/header/header.module';
import {MatTreeModule} from '@angular/material/tree';
import {A11yModule} from '@angular/cdk/a11y';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkingPageRoutingModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    HeaderModule,
    MatTreeModule,
    A11yModule
  ],
  declarations: [NetworkingPage]
})
export class NetworkingPageModule {}
