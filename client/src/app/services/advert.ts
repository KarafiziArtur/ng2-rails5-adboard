import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertService {
  constructor(private http: Http) {}

  BASE_URL = 'http://localhost:3000/';

  getAdvert(id: number) {
    return this.http.get(this.BASE_URL + `adverts/${ id }.json`)
        .map((res) => res.json());
  }

}