import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


export const routes: Routes = [
  { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full'},

  { path: 'roster', loadChildren: './components/roster/roster.module#RosterModule', pathMatch: 'full'},
  { path: 'projects', loadChildren: './components/projects/projects.module#ProjectsModule', pathMatch: 'full'},
  { path: 'events', loadChildren: './components/events/events.module#EventsModule', pathMatch: 'full'},
  { path: 'tutors', loadChildren: './components/tutors/tutors.module#TutorsModule', pathMatch: 'full'},
  { path: 'about', loadChildren: './components/about/about.module#AboutModule', pathMatch: 'full'},
  { path: 'resources', loadChildren: './components/resources/resources.module#ResourcesModule'},
  { path: 'login-admin', loadChildren: './components/login-admin/login-admin.module#LoginAdminModule'},
];

export const appRoutes = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
