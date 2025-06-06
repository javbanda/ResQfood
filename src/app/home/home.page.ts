import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ← Importa esto

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule], // ← Agrégalo aquí
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state?.['nombreUsuario']) {
      this.nombreUsuario = nav.extras.state['nombreUsuario'];
      sessionStorage.setItem('nombreUsuario', this.nombreUsuario);
    } else {
      const nombreGuardado = sessionStorage.getItem('nombreUsuario');
      if (nombreGuardado) {
        this.nombreUsuario = nombreGuardado;
      }
    }
  }
}
