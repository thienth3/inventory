import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpInfo } from '../models/signup-info.class';
import { API_HOST_DEV } from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(user: SignUpInfo): Observable<any> {
    return this.http.post(API_HOST_DEV + '/api/register', user);
  }
}
