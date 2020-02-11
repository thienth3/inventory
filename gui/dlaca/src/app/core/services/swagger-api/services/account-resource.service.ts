/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserDTO } from '../models/user-dto';
import { ResponseEntity } from '../models/response-entity';
import { KeyAndPasswordVM } from '../models/key-and-password-vm';
import { ManagedUserVM } from '../models/managed-user-vm';

/**
 * Account Resource
 */
@Injectable({
  providedIn: 'root',
})
class AccountResourceService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAccountUsingGETResponse(): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDTO>;
      })
    );
  }
  /**
   * @return OK
   */
  getAccountUsingGET(): __Observable<UserDTO> {
    return this.getAccountUsingGETResponse().pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param userDTO userDTO
   * @return OK
   */
  saveAccountUsingPOSTResponse(userDTO: UserDTO): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * @param userDTO userDTO
   * @return OK
   */
  saveAccountUsingPOST(userDTO: UserDTO): __Observable<ResponseEntity> {
    return this.saveAccountUsingPOSTResponse(userDTO).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * @param password password
   * @return OK
   */
  changePasswordUsingPOSTResponse(password: string): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = password;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/change-password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * @param password password
   * @return OK
   */
  changePasswordUsingPOST(password: string): __Observable<ResponseEntity> {
    return this.changePasswordUsingPOSTResponse(password).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * @param keyAndPassword keyAndPassword
   * @return OK
   */
  finishPasswordResetUsingPOSTResponse(keyAndPassword: KeyAndPasswordVM): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = keyAndPassword;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/reset-password/finish`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param keyAndPassword keyAndPassword
   * @return OK
   */
  finishPasswordResetUsingPOST(keyAndPassword: KeyAndPasswordVM): __Observable<string> {
    return this.finishPasswordResetUsingPOSTResponse(keyAndPassword).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param mail mail
   * @return OK
   */
  requestPasswordResetUsingPOSTResponse(mail: string): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = mail;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/account/reset-password/init`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * @param mail mail
   * @return OK
   */
  requestPasswordResetUsingPOST(mail: string): __Observable<ResponseEntity> {
    return this.requestPasswordResetUsingPOSTResponse(mail).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * @param key key
   * @return OK
   */
  activateAccountUsingGETResponse(key: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (key != null) __params = __params.set('key', key.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/activate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param key key
   * @return OK
   */
  activateAccountUsingGET(key: string): __Observable<string> {
    return this.activateAccountUsingGETResponse(key).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return OK
   */
  isAuthenticatedUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return OK
   */
  isAuthenticatedUsingGET(): __Observable<string> {
    return this.isAuthenticatedUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param managedUserVM managedUserVM
   * @return OK
   */
  registerAccountUsingPOSTResponse(managedUserVM: ManagedUserVM): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = managedUserVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResponseEntity>;
      })
    );
  }
  /**
   * @param managedUserVM managedUserVM
   * @return OK
   */
  registerAccountUsingPOST(managedUserVM: ManagedUserVM): __Observable<ResponseEntity> {
    return this.registerAccountUsingPOSTResponse(managedUserVM).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }
}

module AccountResourceService {
}

export { AccountResourceService }
