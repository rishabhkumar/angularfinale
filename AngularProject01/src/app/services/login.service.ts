import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
    console.log('Running service LOGIN');
  }

  signin(userid: number, password: string) {
    let jsonObj = {
      userid: userid,
      pass: password
    }
    return this.http.post('http://localhost:3000/login', jsonObj).map(res => res.json());
  }

}
