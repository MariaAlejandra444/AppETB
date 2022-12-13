import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

loadInfo(parameters: { nombre: string; password: string; }){
  const headers = {};
  var api_url="http://localhost:3000/login";
  return new Promise(resolve => {
    this.http.post(api_url,parameters,headers).subscribe(data => {
      resolve(data);
    }, err =>{
      console.log(err);
    });
  });
}
}
