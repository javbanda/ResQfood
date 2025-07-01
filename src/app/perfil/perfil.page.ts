import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage implements OnInit {
  // Datos personales
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  editando: boolean = false;

  // Experiencia laboral
  empresa: string = '';
  anioInicio: number | null = null;
  trabajaActualmente: boolean = false;
  anioTermino: number | null = null;
  cargo: string = '';

  // Certificaciones
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  tieneVencimiento: boolean = false;
  fechaVencimiento: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nombre = usuario.nombre || '';
      this.email = usuario.email || '';
      this.telefono = usuario.telefono || '';
    }

    const datos = localStorage.getItem('perfilExtendido');
    if (datos) {
      const perfil = JSON.parse(datos);
      this.empresa = perfil.empresa || '';
      this.anioInicio = perfil.anioInicio || null;
      this.trabajaActualmente = perfil.trabajaActualmente || false;
      this.anioTermino = perfil.anioTermino || null;
      this.cargo = perfil.cargo || '';

      this.nombreCertificado = perfil.nombreCertificado || '';
      this.fechaObtencion = perfil.fechaObtencion || '';
      this.tieneVencimiento = perfil.tieneVencimiento || false;
      this.fechaVencimiento = perfil.fechaVencimiento || '';
    }
  }

  toggleEditarPerfil() {
    if (this.editando) {
      // Guardar datos básicos
      const usuarioActualizado = {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono
      };
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));

      // Guardar datos extendidos
      const perfilExtendido = {
        empresa: this.empresa,
        anioInicio: this.anioInicio,
        trabajaActualmente: this.trabajaActualmente,
        anioTermino: this.anioTermino,
        cargo: this.cargo,
        nombreCertificado: this.nombreCertificado,
        fechaObtencion: this.fechaObtencion,
        tieneVencimiento: this.tieneVencimiento,
        fechaVencimiento: this.fechaVencimiento
      };
      localStorage.setItem('perfilExtendido', JSON.stringify(perfilExtendido));
    }
    this.editando = !this.editando;
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('perfilExtendido');
    this.router.navigate(['/login']);
  }
}
