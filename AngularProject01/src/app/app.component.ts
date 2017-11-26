import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  showTag: boolean = false;
  primaryShowTag: boolean = true;

  showMe(bool) {
    this.showTag = bool;
    this.primaryShowTag = false;
  }
}
