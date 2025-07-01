import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, createAnimation } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';

// Animación personalizada para transición de páginas
const customPageTransition = (baseEl: HTMLElement) => {
  return createAnimation()
    .addElement(baseEl)
    .duration(400)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .fromTo('transform', 'translateX(100%)', 'translateX(0%)')
    .fromTo('opacity', '0', '1');
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HttpClientModule, IonicModule.forRoot({innerHTMLTemplatesEnabled: true, navAnimation: customPageTransition }),AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
