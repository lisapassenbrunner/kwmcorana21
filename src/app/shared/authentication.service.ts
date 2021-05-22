import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { retry } from 'rxjs/operators';

interface Token {
  exp: number;
  person: {
    sv_nr: string;
    administrator: string;
  };
}
@Injectable()
export class AuthenticationService {
  private api: string =
    'https://kwmcorana.s1810456024.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  public getCurrentPersonSVNR() {
    return localStorage.getItem('personSVNR');
  }

  public getCurrentPersonAdmin() {
    return localStorage.getItem('personAdmin');
  }

  public setLocalStorage(token: string) {
    const decodedToken = jwt_decode(token) as Token;
    localStorage.setItem('token', token);
    localStorage.setItem('personSVNR', decodedToken.person.sv_nr);
    localStorage.setItem('personAdmin', decodedToken.person.administrator);
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    localStorage.removeItem('token');
    localStorage.removeItem('personSVNR');
    localStorage.removeItem('personAdmin');
  }

  public isLoggedIn() {
    if (localStorage.getItem('token')) {
      let token: string = localStorage.getItem('token');
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log('token expired');
        localStorage.removeItem('token');
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
