import { Injectable } from '@angular/core';
import { API_HOST_DEV } from 'src/app/app.const';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignUpInfo } from '../models/signup-info.class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(user: SignUpInfo): Observable<any> {
    return this.http.post(API_HOST_DEV + '/register', user);
  }
}