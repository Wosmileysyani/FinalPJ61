import { Injectable } from '@angular/core';
import { Account, Role } from '../../models/account';
import { HttpService } from 'src/app/services/http.service';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpService) { }

  getAccount() {
    return this.http
    .requestGet('Accounts')
    .toPromise() as Promise<[]>;
  }

  getUserLogin(accessToken: string) {
    return this.http
        .requestGet('Accounts/' + accessToken)
        .toPromise() as Promise<Account>;
  }

  onLogin(model: Login) {
    return this.http
        .requestPost('Accounts/Login', model)
        .toPromise() as Promise<{ accessToken: string, success, message }>;
}

  onRegister(model: Account) {
    return this.http
      .requestPost('Accounts/Register', model)
      .toPromise() as Promise<{ success, message }>;
  }
}
