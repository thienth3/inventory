import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserJwtControllerService } from '../core/services/swagger-api/services';


export interface UpdatePassword {
  newPassword: any;
  oldPassword: any;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public currentUser: any;
  public eventChange: Subject<any> = new Subject();
  private _key_save = '5g3efge6djsnjdsdh';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userJWTService: UserJwtControllerService
  ) {
    const temp = this.getStorageToken();
    if (temp) {
      this.currentUser = temp.userInfo;
      this.token = temp.idToken;
    }
  }

  getToken() {
    return this.token;
  }
  private getStorageToken() {
    try {
      return JSON.parse(localStorage.getItem(this._key_save));
    } catch (ex) {
      return null;
    }
  }

  notifyDonViChange(): any {
    this.eventChange.next(this.currentUser);
  }

  public isAuthenticated(): boolean {
    console.log(this.currentUser, this.token);
    if (!this.token) {
      return false;
    }
    // Check whether the current time is past the
    // access token's expiry time
    // const expire_time = localStorage.getItem('expires_at');
    // if (expire_time == null || expire_time === '') {
    //   return false;
    // }
    // const expiresAt = new Date(expire_time).getTime();

    // return new Date().getTime() < expiresAt;
    return true;
  }

  logout(): void {
    this.removeAccount();
    this.router.navigateByUrl('/auth/login');
  }

  removeAccount() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem(this._key_save);
  }

  login(body): Observable<any> {
    // this.removeAccount();
    return this.userJWTService.authorizeUsingPOSTResponse(body)
      .pipe(
        map((res: any) => {
          try {
            console.log(res);
            if (res) {
              const temp = res.body;
              localStorage.setItem(this._key_save, temp);
              this.token = temp.idToken;
              this.currentUser = temp.userInfo;
            }
            return true;
          } catch (ex) {
            console.log(ex);
            return false;
          }
        }) // or any other operator
      );
  }

  isVisitor(): any {
    return true;
  }

  isProvider(): any {
    return true;
  }
}
