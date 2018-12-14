import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account.service';
import { AlertService } from 'src/app/shared/service/alert.service';
import { Role } from 'src/app/models/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private account: AccountService,
              private alert: AlertService) { }

  ngOnInit() {
    this.initialCreateFormData();
  }

  get validate() { return this.registerForm.controls; }

  private initialCreateFormData() {
    this.registerForm = this.formBuilder.group({
      AccUser: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^((?!_)[A-Za-z0-9])+$')]],
      AccPass: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^((?!_)[A-Za-z0-9])+$')]],
      AccInitailID: ['', [Validators.required]],
      AccName: ['', [Validators.required, Validators.pattern('[A-Za-z0-9ก-๙]')]],
      AccLastname: ['', [Validators.required, Validators.pattern('[A-Za-z0-9ก-๙]')]],
      AccDate: ['', [Validators.required]],
      AccGender: ['', [Validators.required]],
      AccRole: [Role.User],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
    }
    this.
    account.onRegister(this.registerForm.value)
    .then(res => {
      console.log(res);
      if (res.success)  {
        this.alert.notify(res.message, 'info');
        this.router.navigate(['/', 'login']);
      } else {
        this.alert.notify(res.message, 'warning');
      }
    })
    .catch(err => this.alert.notify(err.Message, 'warning'));
  }

}
