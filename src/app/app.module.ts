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
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CircuitIdComponent } from './components/resources/c463/circuit-id/circuit-id.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/c463/circuit-id', component: CircuitIdComponent}
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
    AboutComponent,
    CircuitIdComponent
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
