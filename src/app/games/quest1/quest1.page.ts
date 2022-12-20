import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { RespuestaPreguntaService } from '../../services/respuesta-pregunta.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {PaginaOkPage } from '../../paginas-ok/pagina-ok/pagina-ok.page';



@Component({
  selector: 'app-quest1',
  templateUrl: './quest1.page.html',
  styleUrls: ['./quest1.page.scss'],
})

export class Quest1Page {
  imagen = document.getElementById('correcto') as HTMLElement;
  Items:any;
  pregunta : any;
  respuesta1 : any;
  respuesta2 : any;
  respuesta3 : any;
  letra: any;
  respuestaCorrecta: any;
  dataLogin = {
    idPregunta:0, 
    letraUsr: ''
    }
  

  constructor(public proveedor : PreguntasService,public proveedor1 : RespuestaPreguntaService,private router :Router,private alertController: AlertController) { }
   
  
  ngOnInit() {
    this.loadInfo();
  }
  loadInfo(){
    this.proveedor.loadInfo('1').then(data=>{
      this.Items = data;
      this.pregunta =this.Items.cuestionario.pregunta;
      this.respuesta1=this.Items.cuestionario.respuestaLetra[0].respuesta;
      this.respuesta2=this.Items.cuestionario.respuestaLetra[1].respuesta;
      this.respuesta3=this.Items.cuestionario.respuestaLetra[2].respuesta;
      console.log(this.Items);
    }).catch(data=>{
      console.log(data);

    })
  }

  async presentAlert(encabezado: string,mensaje1: string,mensaje2: string) {
    const alert = await this.alertController.create({
      header: encabezado,
      subHeader: mensaje1,
      message: mensaje2,
      buttons: ['OK'],
    });

    await alert.present();
  }


  tomarRespuesta(letra: string){

    
    this.dataLogin={idPregunta:1,letraUsr:letra};
    console.log(this.dataLogin);
   this.proveedor1.loadInfo1(this.dataLogin).then(data=>{
      this.Items = data;
      console.log(this.Items.resultadoUsr);
      if(this.Items.resultadoUsr=='Respuesta Correcta'){
        this.router.navigate(['/pagina-ok']);
      }
      else{
        this.router.navigate(['/pagina-mal']);
      }
     }).catch(data=>{
    console.log(data);

  })  
  }
}
