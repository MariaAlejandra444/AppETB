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

  constructor(public fb: FormBuilder) {
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
  }

}
