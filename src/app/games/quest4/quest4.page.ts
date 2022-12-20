import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RespuestaPreguntaService } from '../../services/respuesta-pregunta.service';

@Component({
  selector: 'app-quest4',
  templateUrl: './quest4.page.html',
  styleUrls: ['./quest4.page.scss'],
})
export class Quest4Page implements OnInit {

  Items:any;
  pregunta : any;
  respuesta1 : any;
  respuesta2 : any;
  respuesta3 : any;
  respuesta4 : any;
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
    this.proveedor.loadInfo('4').then(data=>{
      this.Items = data;
      this.pregunta =this.Items.cuestionario.pregunta;
      this.respuesta1=this.Items.cuestionario.respuestaLetra[0].respuesta;
      this.respuesta2=this.Items.cuestionario.respuestaLetra[1].respuesta;
      this.respuesta3=this.Items.cuestionario.respuestaLetra[2].respuesta;
      this.respuesta4=this.Items.cuestionario.respuestaLetra[3].respuesta;
      console.log(this.Items);
    }).catch(data=>{
      console.log(data);

    })
  }

  tomarRespuesta(letra: string){

    
    this.dataLogin={idPregunta:4,letraUsr:letra};
    console.log(this.dataLogin);
   this.proveedor1.loadInfo1(this.dataLogin).then(data=>{
      this.Items = data;
      console.log(this.Items.resultadoUsr);
      if(this.Items.resultadoUsr=='Respuesta Correcta'){
        this.router.navigate(['/pagina-ok4'])
      }
      else{
        this.router.navigate(['/pagina-mal4'])

      }
     }).catch(data=>{
    console.log(data);

  })  
  }

}
