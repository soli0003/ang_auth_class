import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Http, Headers, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {}
  SERVER_URL = 'http://127.0.0.1:8000/';
  
  checkOut(cart: any[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  
    return this.http.post<any>(this.SERVER_URL + 'checkout', cart, { headers: headers });
  }


  login(pwd:string,user:string): Observable<any> {
    console.log({username:user,password:pwd});
    
    return this.http.post<any>(this.SERVER_URL +"login",{username:user,password:pwd});
  }
}
