import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'client/src/app/seed-app.html',
})
@RouteConfig([
  { path: '/',          component: Home,        name: 'Home', useAsDefault: true },
])
export class SeedApp {

  constructor() {}

}
