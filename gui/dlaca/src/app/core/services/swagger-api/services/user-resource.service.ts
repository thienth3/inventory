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
import { ManagedUserVM } from '../models/managed-user-vm';

/**
 * User Resource
 */
@Injectable({
  providedIn: 'root',
})
class UserResourceService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllUsersUsingGETResponse(params: UserResourceService.GetAllUsersUsingGETParams): __Observable<__StrictHttpResponse<Array<UserDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserDTO>>;
      })
    );
  }
  /**
   * @param params The `UserResourceService.GetAllUsersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllUsersUsingGET(params: UserResourceService.GetAllUsersUsingGETParams): __Observable<Array<UserDTO>> {
    return this.getAllUsersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UserDTO>)
    );
  }

  /**
   * @param managedUserVM managedUserVM
   * @return OK
   */
  createUserUsingPOSTResponse(managedUserVM: ManagedUserVM): __Observable<__StrictHttpResponse<ResponseEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = managedUserVM;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
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
  createUserUsingPOST(managedUserVM: ManagedUserVM): __Observable<ResponseEntity> {
    return this.createUserUsingPOSTResponse(managedUserVM).pipe(
      __map(_r => _r.body as ResponseEntity)
    );
  }

  /**
   * @param managedUserVM managedUserVM
   * @return OK
   */
  updateUserUsingPUTResponse(managedUserVM: ManagedUserVM): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = managedUserVM;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/users`,
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
   * @param managedUserVM managedUserVM
   * @return OK
   */
  updateUserUsingPUT(managedUserVM: ManagedUserVM): __Observable<UserDTO> {
    return this.updateUserUsingPUTResponse(managedUserVM).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @return OK
   */
  getAuthoritiesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/authorities`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAuthoritiesUsingGET(): __Observable<Array<string>> {
    return this.getAuthoritiesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * @param login login
   * @return OK
   */
  getUserUsingGETResponse(login: string): __Observable<__StrictHttpResponse<UserDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${login}`,
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
   * @param login login
   * @return OK
   */
  getUserUsingGET(login: string): __Observable<UserDTO> {
    return this.getUserUsingGETResponse(login).pipe(
      __map(_r => _r.body as UserDTO)
    );
  }

  /**
   * @param login login
   */
  deleteUserUsingDELETEResponse(login: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/users/${login}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param login login
   */
  deleteUserUsingDELETE(login: string): __Observable<null> {
    return this.deleteUserUsingDELETEResponse(login).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserResourceService {

  /**
   * Parameters for getAllUsersUsingGET
   */
  export interface GetAllUsersUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }
}

export { UserResourceService }
