import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public http: HttpClient) { }
  loadInfo(parameters: { nombreUsr: string; idUsr:string; emailUsr: string; passUsr: string }){
    const headers = {};
    var api_url="http://localhost:7001/WsEtbMobile-web/webresources/ETB/createUsr/";
    return new Promise(resolve => {
      this.http.post(api_url,parameters,headers).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }
}
