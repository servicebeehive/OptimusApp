import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercertor implements HttpInterceptor {

  constructor(public accountSrvices:AccountService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let data = request.body
    if (request.url.includes('login') || request.url.includes('verifyuserotp') || request.url.includes('signupuser')) {
      request = request.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        body:data
      })
    } 
    else {
      request = request.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
        // body: {
        //    data,
        //   "emailaddress": !this.accountSrvices.getEmail() ? "" : this.accountSrvices.getEmail(),
        //   "x-access-token": !this.accountSrvices.getToken() ? "" : this.accountSrvices.getToken()
        // }
        body: {
          data,
         "emailaddress": "surajkumar.4892@gmail.com",
         "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbGFkZHJlc3MiOiJzdXJhamt1bWFyLjQ4OTJAZ21haWwuY29tIiwiaWF0IjoxNjMxNDU2NzUwLCJleHAiOjE2MzkyMzI3NTB9._Bnb_ohIS0cQE-8zoR7xZKkq6qSk8osvENB6KWpOmn4"
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
