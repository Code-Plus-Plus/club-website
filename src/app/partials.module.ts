import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFooterComponent } from './partials/main-footer/main-footer.component';
import { MainNavComponent } from './partials/main-nav/main-nav.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    MainNavComponent,
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    appRoutes
  ],
  exports: [
    MainNavComponent,
    MainFooterComponent,
  ]
})
export class PartialsModule { }
