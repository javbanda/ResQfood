import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService, Usuario } from '../services/user.service.service'; // Revisa también si el nombre está duplicado

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,          // ✅ Necesario para [(ngModel)]
    RouterModule
  ]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.value.email.trim();
    const password = this.loginForm.value.password.trim();

    const usuariosStr = localStorage.getItem('usuarios');
    if (!usuariosStr) {
      alert('No hay usuarios registrados');
      return;
    }

    const usuarios = JSON.parse(usuariosStr);
    const usuario = usuarios.find((u: any) => u.email === email && u.password === password);

    if (usuario) {
      console.log('Login exitoso');

      const datosUsuario: Usuario = {
        nombre: usuario.nombre,
        email: usuario.email,
        telefono: usuario.telefono || ''
      };

      this.userService.setUsuario(datosUsuario);
      this.router.navigate(['/tabs/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
