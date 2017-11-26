import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  userid: number;
  pass: string;
  status: boolean;
  @Output() showThis = new EventEmitter<boolean>();

  constructor(private service: LoginService) { }

  mamaJi(u: number, p: string) {
    this.userid =  u;
    this.pass = p;

    // Checking User Credentials
    this.service.signin(this.userid, this.pass).subscribe(data => {
      this.status = data.status;
      if(this.status == true) {
        sessionStorage.setItem('data', JSON.stringify(data.msg));
        sessionStorage.setItem('id', this.userid + '');
        this.showThis.emit(true);
      }
    });
  }


}
