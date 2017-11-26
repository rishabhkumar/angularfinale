import { Component } from '@angular/core';
import {PublishService} from "../services/publish.service";

@Component({
  selector: 'app-publishblog',
  templateUrl: './publishblog.component.html',
  styleUrls: ['./publishblog.component.css'],
  providers: [PublishService]
})
export class PublishblogComponent{

  constructor(private service: PublishService) { }

  publishBlog(title: string, content: string, cat: string) {
    this.service.publishBlog(title, content, cat, parseInt(sessionStorage.getItem('id'))).subscribe(data => {
      console.log(data)
    });
  }

}
