import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../service/alert.service';
import { AutenService } from 'src/app/services/auten.service';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';
import { Account, Role } from 'src/app/models/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role = Role;
  userlogin: Account;

  constructor(private alert: AlertService,
              private auten: AutenService,
              private router: Router,
              private account: AccountService) { }

ngOnInit() {
  this.initailLoadUserLogin();
}

onLogout() {
this.alert.notify('ออกจากระบบสำเร็จ', 'info');
this.auten.clearAuthenticated();
this.router.navigate(['/', 'login']);
}

initailLoadUserLogin() {
  if (this.auten.getAuthenticated()) {
     this.account.getUserLogin(this.auten.getAuthenticated())
     .then(item => {
       this.userlogin = item;
     });

  }
}
}
