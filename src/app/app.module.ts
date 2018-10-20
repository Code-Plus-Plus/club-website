import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PartialsModule } from './partials.module';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PartialsModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
