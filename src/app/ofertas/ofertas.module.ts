import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // para pipes como date
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // para routerLink

import { OfertasPageRoutingModule } from './ofertas-routing.module';
import { OfertasPage } from './ofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    OfertasPageRoutingModule
  ],
  declarations: [OfertasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // esto evita errores con etiquetas ion-*
})
export class OfertasPageModule {}
