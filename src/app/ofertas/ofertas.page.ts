import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
  standalone: false,
})
export class OfertasPage {
  ofertas = [
    {
      nombre: 'Box Panadería',
      local: 'Panadería Delicias',
      precio: '3.990',
      fechaVencimiento: new Date('2025-06-10'),
      imagen: 'assets/img/box_1.jpg',
      descripcion: 'Deliciosos productos de panadería con descuento por vencimiento cercano.'
    },
    {
      nombre: 'Box Waffles con nueces',
      local: 'Snack Waffles',
      precio: '5.990',
      fechaVencimiento: new Date('2025-06-08'),
      imagen: 'assets/img/box_2.jpg',
      descripcion: 'Waffles frescos con nueces, perfectos para un desayuno especial.'
    },
    {
      nombre: 'Box Carnes',
      local: 'Carniceria La Vaquita',
      precio: '10.980',
      fechaVencimiento: new Date('2025-06-06'),
      imagen: 'assets/img/box_3.jpg',
      descripcion: 'Carnes frescas con gran descuento por fecha de vencimiento cercana.'
    }
  ];

  constructor(private router: Router) {}

  verDetalles(oferta: any) {
    // Navega a box-detail pasando la oferta como parámetro query
    this.router.navigate(['/box-detail'], {
      queryParams: { box: JSON.stringify(oferta) }
    });
  }
}
