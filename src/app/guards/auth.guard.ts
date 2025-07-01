import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject<UserService>(UserService); // 👈 aquí estaba el problema

  const usuario = userService.getUsuario();

  if (usuario) {
    return true; // acceso permitido
  } else {
    router.navigate(['/login']);
    return false; // redirige al login
  }
};
