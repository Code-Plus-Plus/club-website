import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster.component';

const routes: Routes = [
  { path: '', component: RosterComponent }
];

export const rosterRoutes = RouterModule.forChild(routes);
