import { Component, OnInit } from '@angular/core';
import { DbserviceService } from './services/dbservice.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuController } from '@ionic/angular'; // <-- Importar MenuController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  showMenu = true;

  constructor(
    private dataService: DbserviceService,
    private router: Router,
    private menu: MenuController // <-- Inyectar MenuController
  ) {
    // Escuchar cambios de ruta para controlar visibilidad del menú
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('[RUTA ACTUAL]', event.url); // debug

      if (event.url === '/login' || event.url === '/registro') {
        this.showMenu = false;
        this.menu.enable(false, 'first'); // <-- Desactiva el menú
      } else {
        this.showMenu = true;
        this.menu.enable(true, 'first'); // <-- Activa el menú
      }
    });
  }

  async ngOnInit() {
    await this.dataService.init();
    console.log('[APP] Base de datos inicializada desde AppComponent');
  }

  openMenu() {
    this.menu.open('first'); // <-- Método para abrir el menú manualmente si lo necesitas
  }
}
