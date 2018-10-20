import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';

import { projectsRoutes } from './projects.routes';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    projectsRoutes
  ]
})
export class ProjectsModule { }
