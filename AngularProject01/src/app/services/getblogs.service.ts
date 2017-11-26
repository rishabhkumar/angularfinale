import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GetblogsService {

  constructor(private http: Http) {
    console.log('Fetching blogs');
  }

  getBlogs() {
    return this.http.get('http://localhost:3000/blogs').map(res => res.json());
  }

}
