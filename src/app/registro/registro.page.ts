import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RegistroService } from '../services/registro.service'
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  Items:any;
  ionicForm: FormGroup;

  dataLogin = {
  nombre:'',
  apellido:'',
  email:'',
  contrasena:''
  }

  constructor(public fb: FormBuilder,public proveedor : RegistroService,private router :Router,private alertController: AlertController) {
    this.ionicForm = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellido': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'contrasena': new FormControl("",Validators.required)

    })
   }

   submitForm() {
    this.dataLogin =this.ionicForm.value;
    console.log('datalogin es: '+ this.dataLogin.email);
    this.loadInfo();
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

  loadInfo(){
    this.proveedor.loadInfo(this.dataLogin).then(data=>{
        this.Items = data;
        console.log(this.Items.status.id);
        if(this.Items.status.id== "ok"){
          this.router.navigate(['/home1'])
        }
        else{
          this.presentAlert();

        }
    }).catch(data=>{
      console.log(data);

    })
  }

  
} 


