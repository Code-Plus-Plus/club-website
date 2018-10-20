import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { ResourcesHomeComponent } from './resources-home/resources-home.component';
import { CircuitsComponent } from './c463/circuits/circuits.component';

import { resourcesRoutes } from './resources.routes';

@NgModule({
  declarations: [
    ResourcesComponent,
    ResourcesHomeComponent,
    CircuitsComponent
  ],
  imports: [
    CommonModule,
    resourcesRoutes
  ]
})
export class ResourcesModule { }
