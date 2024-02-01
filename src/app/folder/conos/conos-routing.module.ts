import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConosPage } from './conos.page';

const routes: Routes = [
  {
    path: '',
    component: ConosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConosPageRoutingModule {}
