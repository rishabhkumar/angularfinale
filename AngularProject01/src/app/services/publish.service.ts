import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PublishService {

  constructor(private http: Http) { }

  publishBlog(title: string, content: string,  category: string, authorid: number) {
    let jsonObj = {
      title: title,
      content: content,
      cat: category,
      id: authorid
    }
    return this.http.post('http://localhost:3000/publish', jsonObj).map(res => res.json());
  }
}
