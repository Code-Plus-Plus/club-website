import { RouterModule, Routes } from '@angular/router';
import { TutorsComponent } from './tutors.component';

const routes: Routes = [
  { path: '', component: TutorsComponent }
];

export const tutorsRoutes = RouterModule.forChild(routes);
