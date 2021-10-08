import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabatesInputDirective } from './alphabates-input.directive';

@NgModule({
  declarations: [AlphabatesInputDirective],
  imports: [CommonModule],
  exports: [AlphabatesInputDirective],
})
export class AlphabateInputModule {}
