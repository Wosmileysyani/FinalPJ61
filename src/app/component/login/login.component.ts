import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/service/alert.service';
import { AccountService } from 'src/app/shared/service/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenService } from 'src/app/services/auten.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    returnURL: string;
    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        private alert: AlertService,
        private account: AccountService,
        private router: Router,
        private auten: AutenService,
        private activateRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activateRoute.params.forEach(params => {
            this.returnURL = params.returnURL || '/home';
        });
        this.initialCreateFormData();
    }
    get validate() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.
            account.onLogin(this.loginForm.value)
            .then(res => {
                if (res.success) {
                    this.alert.notify(res.message, 'info');
                    this.auten.setAuthenticated(res.accessToken);
                    this.router.navigateByUrl(this.returnURL);
                } else {
                    this.alert.notify(res.message, 'warning');
                }
            });
    }

    private initialCreateFormData() {
        this.loginForm = this.formBuilder.group({
            AccUser: ['', Validators.required],
            AccPass: ['', Validators.required],
        });
    }
}
