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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot({}),
  
    // MatSliderModule,
    // MatIconModule,
    // ProviderModule,
    // MatButtonModule,
    // MatInputModule,
    // MatCardModule,
    // FormsModule,
    // ReactiveFormsModule,
    // FontAwesomeModule

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
