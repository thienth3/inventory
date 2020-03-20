import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NotifyService } from '../../base/notify.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor (
    private notify: NotifyService,
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((response: HttpErrorResponse) => {
         
          const error = response.error;
          let errMsg = '';
          // Client Side Error
          if (error instanceof ErrorEvent) {
            errMsg = `Error: ${error.message}`;
          } else {  // Server Side Error
            errMsg = 'Error';//error ? `${ error.error.message || response.message }` : response.message;
            // toastr.error('Đã có lỗi xảy ra!');
          }
          
          this.notify.error(errMsg);

          return throwError(errMsg);
        })
      );
  }
}
