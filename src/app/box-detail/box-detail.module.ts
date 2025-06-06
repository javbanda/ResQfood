import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxDetailPageRoutingModule } from './box-detail-routing.module';

import { BoxDetailPage } from './box-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxDetailPageRoutingModule
  ],
  declarations: [BoxDetailPage]
})
export class BoxDetailPageModule {}
