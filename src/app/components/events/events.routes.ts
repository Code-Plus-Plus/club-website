import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', component: EventsComponent }
];

export const eventsRoutes = RouterModule.forChild(routes);
