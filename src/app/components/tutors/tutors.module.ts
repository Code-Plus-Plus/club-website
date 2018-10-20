import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorsComponent } from './tutors.component';

import { tutorsRoutes } from './tutors.routes';

@NgModule({
  declarations: [
    TutorsComponent
  ],
  imports: [
    CommonModule,
    tutorsRoutes
  ]
})
export class TutorsModule { }
