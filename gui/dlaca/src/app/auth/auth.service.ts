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

  private _key_save: string = 'g3efge6djsnjdsdh';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userJWTService: UserJwtControllerService
  ) {
    const temp = this.getStorageToken();

    if (temp) {
      this.currentUser = temp;
      this.token = temp.access_token;
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
    this.router.navigateByUrl('/auth/sign-in');
  }

  removeAccount() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem(this._key_save);
  }

  login(body): Observable<any> {
    return this.userJWTService.authorizeUsingPOSTResponse(body)
      .pipe(
        map((res: any) => {
          try {
            if (res) {
              const temp = res.body;
              localStorage.setItem(this._key_save, JSON.stringify(temp));
              this.token = temp.access_token;
              this.currentUser = temp;
            }
            return true;
          } catch (ex) {
            return false;
          }
        })
      );
  }


  isVisitor(): any {
    return true;
  }

  isProvider(): any {
    return true;
  }

}
