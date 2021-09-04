import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowMiningPage } from './know-mining.page';

const routes: Routes = [
  {
    path: '',
    component: KnowMiningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowMiningPageRoutingModule {}
