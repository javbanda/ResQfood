import { Component, OnInit } from '@angular/core';
import { UserService, Usuario } from '../services/user.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage implements OnInit {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  editando: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const usuario: Usuario | null = this.userService.getUsuario();
    if (usuario) {
      this.nombre = usuario.nombre;
      this.email = usuario.email;
      this.telefono = usuario.telefono || '';
    }
  }

  toggleEditarPerfil() {
    if (this.editando) {
      const usuarioActualizado: Usuario = {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono
      };

      // Guardar en el servicio
      this.userService.setUsuario(usuarioActualizado);

      // Guardar en localStorage
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
    }

    this.editando = !this.editando;
  }
}
