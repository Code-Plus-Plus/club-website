import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';

import { aboutRoutes } from './about.routes';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    aboutRoutes
  ]
})
export class AboutModule { }
