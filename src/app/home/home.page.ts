import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = 'Usuario';

  constructor(private router: Router) {}

  ngOnInit() {
    // Intentar obtener usuario desde localStorage con clave 'usuarioActual'
    const usuarioString = localStorage.getItem('usuarioActual');
    let usuario = null;
    if (usuarioString) {
      try {
        usuario = JSON.parse(usuarioString);
      } catch {
        usuario = null;
      }
    }

    if (usuario && usuario.nombre) {
      this.nombreUsuario = usuario.nombre;
      sessionStorage.setItem('nombreUsuario', this.nombreUsuario);
    } else {
      // Si no hay usuario en localStorage, buscar en sessionStorage
      const nombreGuardado = sessionStorage.getItem('nombreUsuario');
      if (nombreGuardado) {
        this.nombreUsuario = nombreGuardado;
      }
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    sessionStorage.removeItem('nombreUsuario');
    this.router.navigate(['/login']);
  }
}
