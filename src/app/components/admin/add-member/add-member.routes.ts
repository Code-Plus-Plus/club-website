import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member.component';

const routes: Routes = [
  { path: '', component: AddMemberComponent }
];

export const addMemberRoutes = RouterModule.forChild(routes);
