import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(public http: HttpClient) { }

  loadInfo(id: string){
    const headers = {};
    var api_url="http://localhost:7001/WsEtbMobile-web/webresources/ETB/findAllCuestionario/"+id;
    return new Promise(resolve => {
      this.http.get(api_url).subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }
}
