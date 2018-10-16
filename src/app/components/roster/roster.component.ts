import { Component } from '@angular/core';

import { studentRoster } from './roster';

@Component({
  selector: 'club-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  rosterList = studentRoster;
}
