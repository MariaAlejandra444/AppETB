import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-quest2',
  templateUrl: './quest2.page.html',
  styleUrls: ['./quest2.page.scss'],
})
export class Quest2Page implements OnInit {

  Items:any;
  pregunta : any;
  respuesta1 : any;
  respuesta2 : any;
  respuestaCorrecta: any;
  

  constructor(public proveedor : PreguntasService,private router :Router,private alertController: AlertController) { }

  ngOnInit() {
    this.loadInfo();
  }
  loadInfo(){
    this.proveedor.loadInfo('2').then(data=>{
      this.Items = data;
      this.pregunta =this.Items.cuestionario.pregunta;
      this.respuesta1=this.Items.cuestionario.respuestaLetra[0].respuesta;
      this.respuesta2=this.Items.cuestionario.respuestaLetra[1].respuesta;
      console.log(this.Items);
    }).catch(data=>{
      console.log(data);

    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Datos incompletos',
      message: 'Debe Incluir toda la información',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
