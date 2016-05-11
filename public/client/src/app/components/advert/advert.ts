import { Component } from '@angular/core';
import { AdvertService } from '../../services/advert'

@Component({
  selector: 'advert',
  templateUrl: 'client/src/app/components/advert/advert.html',
  styleUrls: ['client/src/app/components/advert/advert.css'],
  providers: [AdvertService],
  directives: [],
  pipes: []
})
export class Advert {

  advert: any[] = {};

  constructor(private httpService: AdvertService) {}

  ngOnInit() {
    this.httpService.getAdvert()
        .subscribe(
            data => this.advert = data,
            error => console.log("Error getting Advert", error),
            () => console.log("Complete getting Advert!")
        );
  }

}
