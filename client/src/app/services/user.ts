import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  BASE_URL = 'http://localhost:3000/';
  
  userInfo: any;

  ngOnInit() {
    this.getUserInfo();
  }
  
  getUserInfo() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.BASE_URL + `users/edit.json`, {headers: headers})
        .map((res) => res.json());
  }
  
  signOut() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.BASE_URL + `users/sign_out`, {headers: headers})
        .map((res) => res);
  }

}