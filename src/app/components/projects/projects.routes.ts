import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }
];

export const projectsRoutes = RouterModule.forChild(routes);
