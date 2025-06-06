import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService, Usuario } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, ReactiveFormsModule, CommonModule, RouterModule]
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

    const { email, password } = this.loginForm.value;

    const userDataString = localStorage.getItem('usuario');
    if (!userDataString) {
      alert('No hay usuarios registrados');
      return;
    }

    const userData = JSON.parse(userDataString);

    if (userData.email === email && userData.password === password) {
      console.log('Login exitoso');

      const usuario: Usuario = {
        nombre: userData.nombre,
        email: userData.email,
        telefono: userData.telefono
      };

      this.userService.setUsuario(usuario);

    

      this.router.navigate(['/tabs/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
