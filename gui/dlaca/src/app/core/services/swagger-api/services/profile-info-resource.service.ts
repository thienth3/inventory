/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProfileInfoVM } from '../models/profile-info-vm';

/**
 * Profile Info Resource
 */
@Injectable({
  providedIn: 'root',
})
class ProfileInfoResourceService extends __BaseService {
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getActiveProfilesUsingGETResponse(): __Observable<__StrictHttpResponse<ProfileInfoVM>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/profile-info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfileInfoVM>;
      })
    );
  }
  /**
   * @return OK
   */
  getActiveProfilesUsingGET(): __Observable<ProfileInfoVM> {
    return this.getActiveProfilesUsingGETResponse().pipe(
      __map(_r => _r.body as ProfileInfoVM)
    );
  }
}

module ProfileInfoResourceService {
}

export { ProfileInfoResourceService }
