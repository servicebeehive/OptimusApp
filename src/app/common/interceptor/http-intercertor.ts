import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercertor implements HttpInterceptor {
  constructor(private router: Router,
               ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let data = request.body
    if (request.url.includes('login') || request.url.includes('verifyuserotp') || request.url.includes('signupuser')) {
      request = request.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        body:data
      })
      console.log('request',request)
    } 
    else {
      request = request.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        body: {
           data,
          "emailaddress": !localStorage.getItem('emailaddress') ? "" : localStorage.getItem('emailaddress'),
          "x-access-token": !localStorage.getItem('token') ? "" : localStorage.getItem('token')
        }
      })
    }

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.body.tokenstatus != undefined && !event.body.tokenstatus) {
                //If tokenstatus is failed then redirect to login page.
            }
          }
        },
        err => {
          //anything we want to do if we get an error response
        },
        () => {
          //It load on the success response of all api call
        }
      )
    );
  }
}
