import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { ResourcesHomeComponent } from './resources-home/resources-home.component';
import { CircuitsComponent } from './c463/circuits/circuits.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent,
    children: [
      { path: '', component: ResourcesHomeComponent},
      { path: 'c463/circuits', component: CircuitsComponent },
      { path: 'c463/circuit-id', redirectTo: '/resources/c463/circuits'},
    ]
  }
];

export const resourcesRoutes = RouterModule.forChild(routes);
