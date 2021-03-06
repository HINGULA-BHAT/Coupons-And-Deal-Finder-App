import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthGuardService implements CanActivate {

  constructor(private router?: Router) { }

  canActivate() {
    if (this.isLoggedIn())
      return true;
    this.router.navigateByUrl('/login');
    return false;
  }

  //Check if the right clientType is loggin in to display a button in the header
  isLoggedIn() {
    let clientType :User = this.getClientType();
    if (clientType && clientType.role === 'Company')
      return true;

    return false;
  }

  //Get the client type from the token
  getClientType() : User{
    let user = sessionStorage.getItem('user');
  
    return JSON.parse(user) ;
  }
}
