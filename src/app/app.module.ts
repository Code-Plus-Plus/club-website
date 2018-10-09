import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MainNavComponent } from './partials/main-nav/main-nav.component';
import { MainFooterComponent } from './partials/main-footer/main-footer.component';

import { HomeComponent } from './components/home/home.component';
import { RosterComponent } from './components/roster/roster.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EventsComponent } from './components/events/events.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    HomeComponent,
    RosterComponent,
    ProjectsComponent,
    EventsComponent,
    TutorsComponent,
    ResourcesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
