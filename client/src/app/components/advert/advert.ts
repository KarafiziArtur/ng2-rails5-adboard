import { Component, Input, Output, EventEmitter } from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { AdvertService } from '../../services/advert';

@Component({
  selector: 'advert',
  templateUrl: `/app/components/advert/advert.html`,
  styleUrls: ['/app/components/advert/advert.css'],
  providers: [AdvertService],
  directives: [ ROUTER_DIRECTIVES ],
  pipes: []
})
export class Advert {

  advert = {};
  @Input() action: string;
  @Input() id: number;
  @Output() onSaveAdvert: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(public routeParams: RouteParams, private httpService: AdvertService) {}

  ngOnChanges() {
    if (this.id) {
      let Materialize = window['Materialize'];
      this.getAdvert();
      setTimeout(function () {
        Materialize.updateTextFields();
        console.log('Materialize updated');
      }, 500);
    }
  }

  getAdvert() {
    let id = +this.id;
    this.httpService.getAdvert(id)
        .subscribe(
            data => this.advert = data,
            error => console.log("Error getting Advert", error),
            () => console.log("Complete getting Advert!")
        );
  }
  
  saveAdvert() {
    this.httpService.saveAdvert(this.advert)
        .subscribe(
            data => {
              this.onSaveAdvert.emit(data.json());
              console.log('data', data);
            },
            error => console.log("Error updating Advert", error),
            () => console.log("Complete updating Advert!")
        );
  }

}
