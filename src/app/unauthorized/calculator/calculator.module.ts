import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalculatorPageRoutingModule } from './calculator-routing.module';
import { CalculatorPage } from './calculator.page';
import { IntegerInputDirectiveModule } from 'src/app/common/directives/integer-input-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    IntegerInputDirectiveModule,
  ],
  declarations: [CalculatorPage],
})
export class CalculatorPageModule {}
