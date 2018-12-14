import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/service/account.service';
import { Router } from '@angular/router';
import { SavingService } from 'src/app/shared/service/saving.service';

@Component({
  selector: 'app-homesaving',
  templateUrl: './homesaving.component.html',
  styleUrls: ['./homesaving.component.css']
})
export class HomesavingComponent implements OnInit {

  account = [];
  Saving = [];

  constructor(private accountSV: AccountService,
              private router: Router,
              private SavingSV: SavingService) { }

  ngOnInit() {
    this.fetchAccount();
  }

  private fetchAccount() {
    this.accountSV.getAccount()
    .then(item => {
      this.account = item;
    });
  }

}
