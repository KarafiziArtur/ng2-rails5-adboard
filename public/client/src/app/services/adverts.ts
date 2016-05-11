import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertsService {
  constructor(private http: Http) {}

  BASE_URL = 'http://localhost:3000/';

  getAdverts() {
    return this.http.get(this.BASE_URL + 'adverts.json')
        .map((res) => res.json());
  }

}