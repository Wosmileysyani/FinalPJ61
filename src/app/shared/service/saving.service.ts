import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Saving } from 'src/app/models/saving';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor(private http: HttpService) { }

  onAddSaving(model: Saving) {
    return this.http
      .requestPost('Savings/AddSaving', model)
      .toPromise() as Promise<{ success, message }>;
  }

  onDeleteSaving(id: any) {
    return this.http
      .requestDelete('Savings/' + id)
      .toPromise() as Promise<{ message }>;
  }

  onUpdateSaving(id: any, model: Saving) {
    console.log(model);
    return this.http
        .requestPut('Savings/' + id, model)
        .toPromise() as Promise<{ message }>;
}

  getSaving() {
    return this.http
    .requestGet('Savings')
    .toPromise() as Promise<[]>;
  }

  getOneSaving(id: string) {
    return this.http
    .requestGet('Savings/GetList/' + id)
    .toPromise() as Promise<[]>;
  }

  getOneupdateSaving(id: any) {
    return this.http
    .requestGet('Savings/' + id)
    .toPromise() as Promise<Saving>;
  }
}
