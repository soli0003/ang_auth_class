import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdsService {
  constructor(private http: HttpClient) {}
  SERVER_URL = 'http://127.0.0.1:8000/products';


  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      });
    return this.http.get<any>(this.SERVER_URL,{ headers: headers });
  }
  addProduct(prd: any): Observable<any> {
    return this.http.post<any>(this.SERVER_URL, prd);
  }
  delProduct(id: number): Observable<any> {
    return this.http.delete<any>(this.SERVER_URL + '/' + id);
  }
  updProduct(prd: any, id: number): Observable<any> {
    return this.http.put<any>(this.SERVER_URL + '/' + id, prd);
  }
  getItem(id: number): Observable<any> {
    return this.http.get<any>(this.SERVER_URL);
  }
}
