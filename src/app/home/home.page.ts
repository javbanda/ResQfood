import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService, Usuario } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = 'Usuario';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Primero intentar obtener usuario desde servicio
    const usuario: Usuario | null = this.userService.getUsuario();

    if (usuario && usuario.nombre) {
      this.nombreUsuario = usuario.nombre;
      // Guardar en sessionStorage para mantener persistencia en recargas
      sessionStorage.setItem('nombreUsuario', this.nombreUsuario);
    } else {
      // Si no hay usuario en servicio, buscar en sessionStorage
      const nombreGuardado = sessionStorage.getItem('nombreUsuario');
      if (nombreGuardado) {
        this.nombreUsuario = nombreGuardado;
      }
    }
  }
}
