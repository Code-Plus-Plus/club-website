import { Component } from '@angular/core';

import { circuitIds } from './circuits';

@Component({
  selector: 'circuit-ids',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css']
})
export class CircuitsComponent {
  circuitList = circuitIds;
}
