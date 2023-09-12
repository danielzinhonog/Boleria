import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaoPage } from './pao.page';

const routes: Routes = [
  {
    path: '',
    component: PaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaoPageRoutingModule {}
