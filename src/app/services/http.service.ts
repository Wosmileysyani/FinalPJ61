import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private address = 'https://localhost:44324/api/';

  requestGet(url: string) {
    return this.http.get(this.address + url);
  }

  requestPost(url: string, body: any) {
    return this.http.post(this.address + url, body);
  }

  requestDelete(url: string) {
    return this.http.delete(this.address + url);
  }

  requestPut(url: string, body: any) {
    return this.http.put(this.address + url, body);
  }

}
