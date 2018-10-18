import { Component } from '@angular/core';

import { circuitIds } from './circuits';

@Component({
  selector: 'circuit-id',
  templateUrl: './circuit-id.component.html',
  styleUrls: ['./circuit-id.component.css']
})
export class CircuitIdComponent {
  circuitList = circuitIds;
}
