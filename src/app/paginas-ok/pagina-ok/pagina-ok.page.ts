import { Component, OnInit } from '@angular/core';
import {Quest1Page } from '../../games/quest1/quest1.page';
import {Quest2Page } from '../../games/quest2/quest2.page';
import {Quest3Page } from '../../games/quest3/quest3.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-ok',
  templateUrl: './pagina-ok.page.html',
  styleUrls: ['./pagina-ok.page.scss'],
})
export class PaginaOkPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
   
  }

  redirect(pagina: string){
  setTimeout(this.asignarRuta,5000,pagina);
  }

  asignarRuta(pagina: string){
  if(pagina=='1'){
    this.router.navigate(['/quest2']);
  }if(pagina=='2'){
    this.router.navigate(['/quest3'])
  }
  }
}
