import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpInfo } from '../models/signup-info.class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:8080/api"
  constructor(private http: HttpClient) { }
  save(user: SignUpInfo): Observable<any> {
    console.log('user', user)
    return this.http.post(this.url + '/register', user);
  }
}
