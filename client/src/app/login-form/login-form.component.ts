import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api-client/api/account.service';
<<<<<<< HEAD
=======
import { LoginRequest } from '../api-client';
>>>>>>> dc1b8d0a80793683eeda13f7237f9a5fbdb15cc2

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private accountService: AccountService,
  ) {
    // TODO: Get username and password from form and run this on user click of a button
    // accountService.accountLoginPost(username, password);
  }

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  doLogin() {
    const loginReq: LoginRequest = {
username: "",
password: ""
    };
    this.accountService.accountLoginPost(loginReq).subscribe()
  }

>>>>>>> dc1b8d0a80793683eeda13f7237f9a5fbdb15cc2
}