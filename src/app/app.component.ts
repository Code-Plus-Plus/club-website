import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit() {
    // jump to top of page whenever a nav-link is used
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      } else {
        document.body.scrollTop = 0;
      }
    });
  };
}
