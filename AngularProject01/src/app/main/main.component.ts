import { Component } from '@angular/core';
import { GetblogsService } from "../services/getblogs.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GetblogsService]
})
export class MainComponent{

  jsonData: string;
  jsonBlogs: object[];

  constructor(private service: GetblogsService) {
    this.jsonData = sessionStorage.getItem('data');
    console.log(JSON.parse(this.jsonData));
    this.service.getBlogs().subscribe(data => {
      this.jsonBlogs = data;
      console.log(this.jsonBlogs);
    });
  }



}
