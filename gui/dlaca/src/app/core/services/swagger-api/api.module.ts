/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { AccountResourceService } from './services/account-resource.service';
import { UserJwtControllerService } from './services/user-jwt-controller.service';
import { ProfileInfoResourceService } from './services/profile-info-resource.service';
import { UserResourceService } from './services/user-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AccountResourceService,
    UserJwtControllerService,
    ProfileInfoResourceService,
    UserResourceService
  ],
})
export class ApiModule { }
