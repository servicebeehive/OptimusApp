/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseService {
  protected constructor(
    public httpClient: HttpClient,
    public BaseUrl: string
  ) {}

  public async PostReturn<T, U>(controllerInfo: string, info: T): Promise<U> {
    const requestInfo = JSON.stringify(info);
    return await this.httpClient
      .post<U>(this.BaseUrl + controllerInfo, requestInfo, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }

  public async Post<U>(controllerInfo: string): Promise<U> {
    return await this.httpClient
      .post<U>(this.BaseUrl + controllerInfo, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }

  public async PostPayment<T, U>(controllerInfo: string, info: T): Promise<U> {
    const requestInfo = JSON.stringify(info);
    return await this.httpClient
      .post<U>(this.BaseUrl + controllerInfo, requestInfo, {
        headers: new HttpHeaders({
          // eslint-disable-next-line quote-props
          Accept: 'text/html',
          'Content-Type': 'application/json',
          responseType: 'text',
        }),
      })
      .toPromise();
  }

  public async Get<U>(controllerInfo: string): Promise<U> {
    return await this.httpClient
      .get<U>(this.BaseUrl + controllerInfo, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }

  public async GetWithRowId<U>(
    controllerInfo: string,
    RowId: number
  ): Promise<U> {
    return await this.httpClient
      .get<U>(this.BaseUrl + controllerInfo + `/${RowId}`, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }

  public async Put<T, U>(controllerInfo: string, info: T): Promise<U> {
    const requestInfo = JSON.stringify(info);
    return await this.httpClient
      .put<U>(this.BaseUrl + controllerInfo, requestInfo, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }

  public async Delete<U>(controllerInfo: string, RowId: number): Promise<U> {
    return await this.httpClient
      .delete<U>(this.BaseUrl + controllerInfo + `?Id=${RowId}`, {
        headers: new HttpHeaders().set('content-type', 'application/json'),
      })
      .toPromise();
  }
}
