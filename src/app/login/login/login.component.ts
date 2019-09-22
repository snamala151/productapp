import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../login-model';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel =  new LoginModel();
  message: string = '';

  constructor(private loginService: LoginService, private routerService: Router) { }

  ngOnInit() {
  }

  onSubmitClick() {
    const isValidUser = this.loginService.authenticateUser(this.loginModel);
    if(isValidUser == true){
      this.routerService.navigate(['/products/productlist']);
    } else {
      this.message = 'Invalid Credentials';
    }
  }

}
