import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInInfo } from '../models/signin-info.class';
import { API_HOST_DEV } from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(
    private http: HttpClient
  ) { }
  signIn(user: SignInInfo): Observable<any> {
    return this.http.post(API_HOST_DEV + '/api/authenticate', user);
  }
}
