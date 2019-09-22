import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticateUser(loginModel) {

    if(loginModel.userName == 'prasanna' && loginModel.password == 'test123'){
       return true;
    } else {
     return false;
    }
  }

}
