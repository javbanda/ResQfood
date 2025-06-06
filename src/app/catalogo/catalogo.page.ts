import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false,
})
export class CatalogoPage {

  constructor(private router: Router) {}

  verPack(nombrePack: string) {
    // Guarda el nombre del pack en localStorage o usa un servicio para compartir estado
    localStorage.setItem('packSeleccionado', nombrePack);
    // Navega a la página boxes
    this.router.navigate(['/boxes']);
  }
}