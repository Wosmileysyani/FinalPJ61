import { Component, OnInit } from '@angular/core';
import { SavingService } from 'src/app/shared/service/saving.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/shared/service/account.service';
import { AutenService } from 'src/app/services/auten.service';
import { AlertService } from 'src/app/shared/service/alert.service';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Saving = [];
  userlogin: Account;
  constructor(
    private SavingSV: SavingService,
    private router: Router,
    private account: AccountService,
    private authen: AutenService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.GetUsrdetail();
    setTimeout(function () {
      $('#table').DataTable({
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Thai.json'
        }
      });
    }, 1000);
  }

  private fetchSaving(user: string) {
    this.SavingSV.getOneSaving(user)
      .then(item => {
        this.Saving = item;
      });
  }
  private GetUsrdetail() {
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(item => {
        this.userlogin = item;
        this.fetchSaving(this.userlogin.accUser);
      });
  }

  onDelete(id) {
    if (confirm('ต้องการลบใช่หรือไม่')) {
      this.SavingSV.onDeleteSaving(id)
        .then(item => {
          this.alert.notify(item.message, 'success');
        });
    }
    this.GetUsrdetail();
  }

}
