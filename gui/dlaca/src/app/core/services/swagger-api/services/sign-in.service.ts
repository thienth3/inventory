import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInInfo } from '../models/signin-info.class';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  url= "http://localhost:8080/api"
  constructor(
    private http: HttpClient
  ) { }
  save(user: SignInInfo): Observable<any> {
    console.log('user',user)
    return this.http.post( this.url+'/authenticate', user);
  }
}
