import { Component } from '@angular/core';

import { clubRoster, RosterListing } from './club-roster';

@Component({
  selector: 'club-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  rosterList: RosterListing[] = clubRoster;
}
