/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercertor implements HttpInterceptor {
  constructor(public accountSrvices: AccountService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const data = request.body;
    if (
      request.url.includes('login') ||
      request.url.includes('verifyuserotp') ||
      request.url.includes('signupuser') ||
      request.url.includes('resetoperation')
    ) {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: data,
      });
    } else if (
      request.url.includes('getnetworkdata') ||
      request.url.includes('getpaymethod')
    ) {
      const tokendata = {
        emailaddress: !this.accountSrvices.getEmail()
          ? ''
          : this.accountSrvices.getEmail(),
        'x-access-token': !this.accountSrvices.getToken()
          ? ''
          : this.accountSrvices.getToken(),
      };

      const body = {
        ...tokendata,
      };
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body,
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-types
      const reqData = data === null ? null : JSON.parse(data);
      const tokendata = {
        emailaddress: !this.accountSrvices.getEmail()
          ? ''
          : this.accountSrvices.getEmail(),
        'x-access-token': !this.accountSrvices.getToken()
          ? ''
          : this.accountSrvices.getToken(),
      };
      const body = {
        ...reqData,
        ...tokendata,
      };
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body,
      });
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (
              event.body.tokenstatus !== undefined &&
              !event.body.tokenstatus
            ) {
              //If tokenstatus is failed then redirect to login page.
            }
          }
        },
        (err) => {
          //anything we want to do if we get an error response
        },
        () => {
          //It load on the success response of all api call
        }
      )
    );
  }
}
