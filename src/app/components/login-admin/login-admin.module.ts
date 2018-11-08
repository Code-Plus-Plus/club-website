import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminComponent } from './login-admin.component';

import { loginAdminRoutes } from './login-admin.routes';

@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    loginAdminRoutes
  ]
})
export class LoginAdminModule { }
