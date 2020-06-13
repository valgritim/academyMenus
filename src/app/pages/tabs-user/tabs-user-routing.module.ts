import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserPage } from './tabs-user.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserPageRoutingModule {}
