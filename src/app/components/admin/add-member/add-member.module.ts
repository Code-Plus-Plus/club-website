import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AddMemberComponent } from './add-member.component';

import { addMemberRoutes } from './add-member.routes';

@NgModule({
  declarations: [
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    addMemberRoutes
  ]
})
export class AddMemberModule { }
