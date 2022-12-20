import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../services/preguntas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  Items:any;
  pregunta : any;
  

  constructor(public proveedor : PreguntasService,private router :Router,private alertController: AlertController) { }

  ngOnInit() {
    this.loadInfo();
  }
  loadInfo(){
    this.proveedor.loadInfo('1').then(data=>{
      this.Items = data;
      this.pregunta =this.Items.cuestionario.pregunta;
      console.log(this.pregunta);
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
