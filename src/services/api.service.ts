/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface IApi {
  isSuccess: true;
  message: 'Success';
  result: any;
  statusCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  handleResponse(response: any): any {
    if (response && response.statusCode === 200) {
      return response;
    }
  }

  handleErrorResponse(error: any, url?: any): any {
    if (
      error.status === 401 ||
      error.statusCode === 401 ||
      error.response_data === 401
    ) {
    } else {
      return error;
    }
  }
  callGetApi(apiurl: string, reqParams?: HttpParams): Observable<any> {
    const authToken = '';

    return this.http
      .get(apiurl, {
        params: reqParams,
        headers: {
          Authorization: authToken,
        },
      })
      .pipe(
        tap(
          (data) => this.handleResponse(data),
          (error) => this.handleErrorResponse(error, apiurl)
        ),
        map((data: any) => {
          return data;
        })
      );
  }
  callPostApi(apiurl: string, body: any, options?: any): Observable<any> {
    const authToken = '';
    return this.http.post(apiurl, body, {}).pipe(
      tap(
        (data) => this.handleResponse(data),
        (error) => this.handleErrorResponse(error, apiurl)
      )
    );
  }
  callPutApi(apiurl: string, body: any, params?: HttpParams): Observable<any> {
    const authToken = '';
    return this.http
      .put(apiurl, body, {
        params,
        headers: {
          Authorization: authToken,
        },
      })
      .pipe(
        tap(
          (data) => this.handleResponse(data),
          (error) => this.handleErrorResponse(error, apiurl)
        )
      );
  }

  callDeleteApi(apiurl: string, params?: HttpParams): Observable<any> {
    const authToken = '';
    return this.http
      .delete(apiurl, {
        params,
        headers: {
          Authorization: authToken,
        },
      })
      .pipe(
        tap(
          (data) => this.handleResponse(data),
          (error) => this.handleErrorResponse(error, apiurl)
        )
      );
  }
}
