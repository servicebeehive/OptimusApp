import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhyOptimusPage } from './why-optimus.page';

const routes: Routes = [
  {
    path: '',
    component: WhyOptimusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhyOptimusPageRoutingModule {}
