import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RestService } from '../services/rest.service'
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  Items:any;
  ionicForm: FormGroup;

  dataLogin = {
  nombre: '', 
  password: ''
  }

  dataLogin1 = {
    nombre: ''
    }

  constructor(public fb: FormBuilder,public proveedor : RestService, private router :Router,private alertController: AlertController) {
    this.ionicForm = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
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

  submitForm() {
    this.dataLogin =this.ionicForm.value;
    console.log('datalogin es: '+ this.dataLogin.nombre);
    this.loadInfo();
  }

  loadInfo(){
    this.proveedor.loadInfo(this.dataLogin.nombre).then(data=>{
        this.Items = data;
        console.log(this.Items);
        if(this.Items.response.messageCode == 'OK'){
          if(this.Items.usuarios.passUsr == this.dataLogin.password){
            this.router.navigate(['/home1'])
          }else{
            this.presentAlert('ERROR','contraseña incorrecta','Verifique la información');
          }
        }
        else{
          this.presentAlert('ERROR','Usuario no existe','Debe registrarse');

        }
    }).catch(data=>{
      console.log(data);

    })
  }

}
