import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadingService } from '../../base/loading.service';
import { NotifyService } from '../../base/notify.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor (
    private loadingBar: LoadingService,
    ) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // https://github.com/angular/angular/issues/18155
    if (req.headers.has('ignoreLoading')) {
      return next.handle(req.clone({headers: req.headers.delete('ignoreLoading')}));
    }

    const r = next.handle(req);

    let started = false;
    const responseSubscribe = r.subscribe.bind(r);
    r.subscribe = (...args) => {
      this.loadingBar.start();
      started = true;
      return responseSubscribe(...args);
    };

    return r.pipe(
      finalize(() => started && this.loadingBar.complete()),
    );
  }
}
