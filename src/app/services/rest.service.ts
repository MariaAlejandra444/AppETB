import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

loadInfo(id: string){//parameters: { nombre: string}){
  console.log(id);
  const headers = {}
  
  var api_url="http://localhost:7001/WsEtbMobile-web/webresources/ETB/findByIdUsr/"+id;
  console.log("esta es la url : "+api_url)
  return new Promise(resolve => {
    this.http.get(api_url,headers).subscribe(data => {
      resolve(data);
    }, err =>{
      console.log(err);
    });
  });
}
}
