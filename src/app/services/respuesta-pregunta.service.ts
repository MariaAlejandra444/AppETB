import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RespuestaPreguntaService {

  
  constructor(public http: HttpClient) { }

  loadInfo1(dataLogin: { idPregunta: number; letraUsr: string; }){//parameters: { nombre: string}){
    const headers = {}
    var api_url="http://localhost:7001/WsEtbMobile-web/webresources/ETB/findAnswerByIdUsr";
    console.log("esta es la url : "+api_url)
    return new Promise(resolve => {
      this.http.post(api_url,dataLogin,headers).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }
}
