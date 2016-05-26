import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertsService {
  constructor(private http: Http) {}

  BASE_URL = 'http://localhost:3000/';

  getAdverts() {
    return this.http.get(this.BASE_URL + 'adverts.json')
        .map((res) => res.json());
  }

  getAdvert(id: number) {
    return this.http.get(this.BASE_URL + `adverts/${ id }.json`)
        .map((res) => res.json());
  }

  deleteAdvert(id: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.BASE_URL + `adverts/${ id }.json`, {headers: headers})
        .map((res) => res);
  }

}