import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INIT_API_CONFIGURATION } from './core/services/api.config';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { ApiModule } from './core/services/swagger-api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './core/http/interceptors/http-token.interceptor';
import { HttpLoadingInterceptor } from './core/http/interceptors/http-loading.interceptor';
import { HttpErrorInterceptor } from './core/http/interceptors/http-error.interceptor';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule,  } from '@angular/forms';
import { ProviderModule } from './provider/provider.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    ProviderModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    INIT_API_CONFIGURATION,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
