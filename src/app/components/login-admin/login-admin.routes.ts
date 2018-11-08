import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin.component';

const routes: Routes = [
  { path: '', component: LoginAdminComponent }
];

export const loginAdminRoutes = RouterModule.forChild(routes);
