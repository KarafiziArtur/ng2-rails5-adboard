import { Component } from '@angular/core';
import { AdvertsService } from '../../services/adverts'

@Component({
  selector: 'home',
  templateUrl: 'client/src/app/components/home/home.html',
  styleUrls: ['client/src/app/components/home/home.css'],
  providers: [AdvertsService],
  directives: [],
  pipes: []
})
export class Home {

  adverts: any[] = [];

  constructor(private httpService: AdvertsService) {}

  ngOnInit() {
    this.httpService.getAdverts()
      .subscribe(
        data => this.adverts = data,
        error => console.log("Error getting Adverts", error),
        () => console.log("Complete getting Adverts!")
      );
  }

}
