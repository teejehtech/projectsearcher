import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectTopicsPageRoutingModule } from './project-topics-routing.module';

import { ProjectTopicsPage } from './project-topics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectTopicsPageRoutingModule
  ],
  declarations: [ProjectTopicsPage]
})
export class ProjectTopicsPageModule {}
