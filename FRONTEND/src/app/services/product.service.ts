import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = "";

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  fileHttpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data'
    })
  };
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.baseUrl;
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(page: any, limit: any): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products/' + `?size=${limit}&page=${page}`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(product: any): Observable<Product> {

    return this.httpClient.post<Product>(this.apiURL + '/products/', product)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiURL + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
