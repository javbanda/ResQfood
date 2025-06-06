import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    RegistroPage,
    RouterModule.forChild([
      {
        path: '',
        component: RegistroPage
      }
    ])
  ]
})
export class RegistroPageModule {}
