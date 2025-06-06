import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [IonicModule, ReactiveFormsModule, CommonModule, RouterModule]
})
export class RegistroPage {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmarPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatch });
  }

  // Validador personalizado
  passwordsMatch(formGroup: FormGroup) {
    const pass = formGroup.get('password')?.value;
    const confirm = formGroup.get('confirmarPassword')?.value;
    return pass === confirm ? null : { noMatch: true };
  }

  get nombre() {
    return this.registroForm.get('nombre');
  }

  get email() {
    return this.registroForm.get('email');
  }

  get password() {
    return this.registroForm.get('password');
  }

  get confirmarPassword() {
    return this.registroForm.get('confirmarPassword');
  }

  async onSubmit() {
    if (this.registroForm.valid) {
      const nuevoUsuario = {
        nombre: this.registroForm.value.nombre,
        email: this.registroForm.value.email,
        password: this.registroForm.value.password
      };

      // Verificar si ya existe ese email
      const usuarioExistenteStr = localStorage.getItem('usuario');
      const usuarioExistente = usuarioExistenteStr ? JSON.parse(usuarioExistenteStr) : null;

      if (usuarioExistente && usuarioExistente.email === nuevoUsuario.email) {
        this.mostrarToast('Este correo ya está registrado.');
        return;
      }

      // Guardar en localStorage y navegar al home
      localStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
      this.router.navigate(['/home'], { state: { nombreUsuario: nuevoUsuario.nombre } });
    } else {
      this.registroForm.markAllAsTouched();
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
}
