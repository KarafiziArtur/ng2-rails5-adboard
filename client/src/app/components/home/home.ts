import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AdvertsService } from '../../services/adverts';
import { Advert } from '../advert/advert';
import { AdvertAdd } from '../advert/advert.add';
import { LastAdvertDirective } from './last.advert.ts'
import { UserService } from '../../services/user'


@Component({
  selector: 'home',
  templateUrl: '/app/components/home/home.html',
  styleUrls: ['/app/components/home/home.css'],
  providers: [ AdvertsService, UserService ],
  directives: [ ROUTER_DIRECTIVES, Advert, LastAdvertDirective, AdvertAdd ],
  pipes: []
})
export class Home {

  adverts: any = [];
  id: number;
  action: string;
  userInfo: any;

  constructor(private httpService: AdvertsService, private userService: UserService) {}

  getAdverts() {
    this.httpService.getAdverts()
        .subscribe(
            data => this.adverts = data,
            error => console.log("Error getting Adverts", error),
            () => {
              console.log("Complete getting Adverts!");
            }
        );
  }

  getUserInfo() {
    this.userService.getUserInfo()
        .subscribe(
            data => this.userInfo = data,
            error => console.log("Error getting User Info", error)
        );
  }
  
  ngOnInit() {
    this.getUserInfo();
    this.getAdverts();
  }
  
  initModal() {
    let jQuery = window['$'];
    jQuery('.modal-trigger').leanModal();
    console.log('Initialize complete!');
  }

  deleteAdvert(advert: any) {
    let advertIndex: number = this.adverts.indexOf(advert);
    return this.httpService.deleteAdvert(advert.id)
        .subscribe(
            data => console.log(data),
            error => console.log("Error deleting Advert", error),
            () => {
              console.log("Complete deleting Advert!");
              return this.adverts.splice(advertIndex, 1);
            }
        );
  }

  openAdvert(advertId: number, action: string = 'view') {
    this.action = action;
    this.id = advertId;
  }

  updateAdvert(advert: any) {
    let advertFromId = this.adverts.filter((ad) => {
      return ad.id === advert.id;
    });
    let advertIndex = this.adverts.indexOf(advertFromId[0]);
    this.adverts[advertIndex] = advert;
  }
  
  addAdvert(advert: any) {
    this.adverts.push(advert);
  }

}
