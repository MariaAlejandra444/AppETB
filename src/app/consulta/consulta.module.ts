import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD:src/app/localizador/localizador.module.ts
import { LocalizadorPageRoutingModule } from './localizador-routing.module';

import { LocalizadorPage } from './localizador.page';
=======
import { ConsultaPageRoutingModule } from './consulta-routing.module';

import { ConsultaPage } from './consulta.page';
>>>>>>> aleja:src/app/consulta/consulta.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:src/app/localizador/localizador.module.ts
    LocalizadorPageRoutingModule
  ],
  declarations: [LocalizadorPage]
})
export class LocalizadorPageModule {}
=======
    ConsultaPageRoutingModule
  ],
  declarations: [ConsultaPage]
})
export class ConsultaPageModule {}
>>>>>>> aleja:src/app/consulta/consulta.module.ts
