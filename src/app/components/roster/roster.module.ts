import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterComponent } from './roster.component';

import { rosterRoutes } from './roster.routes';

@NgModule({
  declarations: [
    RosterComponent
  ],
  imports: [
    CommonModule,
    rosterRoutes
  ]
})
export class RosterModule { }
