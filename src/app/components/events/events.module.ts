import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';

import { eventsRoutes } from './events.routes';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    eventsRoutes
  ]
})
export class EventsModule { }
