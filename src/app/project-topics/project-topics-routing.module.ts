import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTopicsPage } from './project-topics.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectTopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTopicsPageRoutingModule {}
