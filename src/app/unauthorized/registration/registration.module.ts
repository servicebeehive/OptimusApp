import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { IntegerInputDirectiveModule } from 'src/app/common/directives/integer-input-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    ReactiveFormsModule,
    IntegerInputDirectiveModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
