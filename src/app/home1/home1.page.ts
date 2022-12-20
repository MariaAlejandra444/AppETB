import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accountPages = [
    {
       title: 'Log In',
       url: '/login',
       ionicIcon: 'log-in-outline'
    },
    {
       title: 'Registro',
       url: '/registro',
       ionicIcon: 'person-add-outline'
    }
  ]

}
