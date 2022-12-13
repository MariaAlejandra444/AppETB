import { Component, OnInit } from '@angular/core';

declare var google: { maps: { Map: new (arg0: HTMLElement, arg1: { center: { lat: number; lng: number; }; zoom: number; }) => null; event: { addListenerOnce: (arg0: null, arg1: string, arg2: () => void) => void; }; }; };

@Component({
  selector: 'app-localizador',
  templateUrl: './localizador.page.html',
  styleUrls: ['./localizador.page.scss'],
})
export class LocalizadorPage implements OnInit {

  map = null;

  constructor() { }

  ngOnInit() {
    
  }

  

}
