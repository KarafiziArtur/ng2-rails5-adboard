import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import { Home } from './components/home/home';

import { UserService } from './services/user';

@Component({
  selector: 'app',
  providers: [UserService, Location],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
])
export class SeedApp {
  constructor(private userService: UserService, location: Location) {}

  userInfo: any;

  getUserInfo() {
    this.userService.getUserInfo()
        .subscribe(
            data => this.userInfo = data,
            error => console.log("Error getting User Info", error),
            () => console.log("Complete getting User Info!")
        );
  }
  
  ngOnInit(){
    this.getUserInfo();
  }

  signOut() {
    this.userService.signOut()
        .subscribe(
            data => data,
            error => console.log("Error Sign Out", error),
            () => {
              console.log("Complete Sign Out!");
              this.userInfo = null;
              location.reload(true);
            }
        );
  }

}
