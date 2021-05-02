import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  http: HttpClient;
  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})}

  urlApi = 'https://jcback.justcrok.com/api/user/register';
  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }
  addService (
    fullName: string,
    email: string,
    password: any,
   role:any
   ){
    const body = {
      fullName: fullName,
      email:email,
      password: password,
      role:role
    }


    return this.http.post(this.urlApi, body,this.noAuthHeader);
   }


}
