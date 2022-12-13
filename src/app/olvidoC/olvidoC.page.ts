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
  selector: 'app-olvidoC',
  templateUrl: './olvidoC.page.html',
  styleUrls: ['./olvidoC.page.scss'],
})
export class OlvidoCPage {

  Items:any;
  ionicForm: FormGroup;

  dataLogin = {
  email:''
  }

  constructor(public fb: FormBuilder) { 
    this.ionicForm = this.fb.group({
      'email': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  submitForm() {
    this.dataLogin =this.ionicForm.value;
    console.log('datalogin es: '+ this.dataLogin.email);
  }

}