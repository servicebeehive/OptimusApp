import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareAppRoutingModule } from './share-app-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareAppComponent } from './share-app.component';

@NgModule({
  declarations: [ShareAppComponent],
  imports: [CommonModule, ShareAppRoutingModule, FormsModule, IonicModule],
  exports: [ShareAppComponent],
})
export class ShareAppModule {}
