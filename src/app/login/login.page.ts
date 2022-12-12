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

  constructor(public fb: FormBuilder,public proveedor : RestService, private router :Router,private alertController: AlertController) {
    this.ionicForm = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Usuario o contraseña incorrecta',
      message: 'Debe registrarse',
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
