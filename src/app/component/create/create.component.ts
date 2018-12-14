import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/service/alert.service';
import { SavingService } from 'src/app/shared/service/saving.service';
import { AccountService } from 'src/app/shared/service/account.service';
import { AutenService } from 'src/app/services/auten.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    savingForm: FormGroup;
    submitted = false;
    saveAccUser: any;
    items: any;
    username: string;
    id: any;
    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private authen: AutenService,
        private alert: AlertService,
        private account: AccountService,
        private savingSV: SavingService,
        private activedRoute: ActivatedRoute) {
        this.initialCreateFormData();
        this.activedRoute.params.forEach(
            params => {
                if (params.id !== undefined) {
                console.log(params.id);
                this.id = params.id;
                this.initialLoadOneSaving(params.id);
            }
            }
        );
    }

    ngOnInit() {
        this.initialCreateFormData();
        this.initialLoadUserLogin();
    }

    get validate() { return this.savingForm.controls; }

    private initialCreateFormData() {
        this.savingForm = this.formBuilder.group({
            saveAccUser: [''],
            saveId: [0],
            saveType: [0, [Validators.required]],
            saveAmount: ['', [Validators.required]],
            saveDescrip: ['', [Validators.required]],
            saveDate: ['', [Validators.required]],
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.savingForm.invalid) {
          return;
        }
        if (this.savingForm.get('saveId').value === 0) {
            this.savingForm.get('saveAccUser').setValue(this.username);
          this.
            savingSV.onAddSaving(this.savingForm.value)
            .then(res => {
              this.alert.notify(res.message, 'success');
              this.router.navigateByUrl('/home');
            });
          return;
        } else {
        this.
          savingSV.onUpdateSaving(this.id, this.savingForm.value)
          .then(res => {
            this.alert.notify(res.message, 'success');
            this.router.navigateByUrl('/home');
          });
        }
      }
    initialLoadUserLogin() {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then(userLogin => {
                this.username = userLogin.accUser;
            });
    }

    private initialLoadOneSaving(id: any) {
        this.
            savingSV.getOneupdateSaving(id)
            .then(res => {
                console.log(res);
                this.savingForm.get('saveAccUser').setValue(res.saveAccUser);
                this.savingForm.get('saveAmount').setValue(res.saveAmount);
                this.savingForm.get('saveId').setValue(res.saveId);
                this.savingForm.get('saveType').setValue(res.saveType);
                this.savingForm.get('saveDescrip').setValue(res.saveDescrip);
                this.savingForm.get('saveDate').setValue(res.saveDate.toString().split('T')[0]);
            })
            .catch(err => this.alert.notify(err.message, 'error'));
    }
}
