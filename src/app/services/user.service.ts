import { Injectable } from '@angular/core';

export interface Usuario {
  nombre: string;
  email: string;
  telefono?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarioActual: Usuario | null = null;

  setUsuario(usuario: Usuario) {
    this.usuarioActual = usuario;
  }

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  cerrarSesion() {
    // Solo borra el usuario actual, NO el usuario registrado guardado en localStorage
    this.usuarioActual = null;
    
  }
}
