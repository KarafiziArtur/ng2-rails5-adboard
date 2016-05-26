import { Component, Output, EventEmitter } from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { AdvertService } from '../../services/advert';

@Component({
  selector: 'advert-add',
  templateUrl: `/app/components/advert/advert.add.html`,
  styleUrls: ['/app/components/advert/advert.css'],
  providers: [AdvertService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class AdvertAdd {

  advert = {};
  @Output() onAddAdvert: EventEmitter<any> = new EventEmitter<any>();

  constructor(public routeParams: RouteParams, private httpService: AdvertService) {}

  addAdvert() {
    let jQuery = window['$'];
    this.httpService.addAdvert(this.advert)
        .subscribe(
            data => {
              this.onAddAdvert.emit(data.json());
              jQuery('#addAdvert').closeModal();
              console.log('data', data);
            },
            error => console.log("Error adding Advert", error),
            () => {
              console.log("Complete adding Advert!");
            }
        );
  }

}
