import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertService {
  constructor(private http: Http) {}

  BASE_URL = 'http://localhost:3000/';

  getAdvert(id: number) {
    return this.http.get(this.BASE_URL + `adverts/${ id }.json`)
        .map((res) => res.json());
  }

  saveAdvert(advert: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.BASE_URL + `adverts/${ advert.id }.json`, JSON.stringify(advert), {headers: headers});
  }

  addAdvert(advert: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.BASE_URL + `adverts`, JSON.stringify(advert), {headers: headers});
  }

}