import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Box {
  id: number;
  titulo: string;
  restaurante: string;
  precio: number;
  fechaVencimiento: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiBoxesService {

  private boxesData: Box[] = [
    {
      id: 1,
      titulo: 'Box Hamburguesa',
      restaurante: 'Panadería Delicias',
      precio: 8990,
      fechaVencimiento: '31/06/2025',
      imagen: 'assets/img/box_hamburguesa.jpg'
    },
    {
      id: 2,
      titulo: 'Box Vegetales Surtidos',
      restaurante: 'Verdulería Orgánica',
      precio: 12500,
      fechaVencimiento: '31/06/2025',
      imagen: 'assets/img/box_vegetales.jpg'
    },
    {
      id: 3,
      titulo: 'Box Antojitos',
      restaurante: 'Snack Waffles',
      precio: 7000,
      fechaVencimiento: '31/06/2025',
      imagen: 'assets/img/box_antojitos.jpg'
    },
    {
      id: 4,
      titulo: 'Box Varios',
      restaurante: 'Supermercado Eco',
      precio: 15000,
      fechaVencimiento: '31/06/2025',
      imagen: 'assets/img/box_varios.jpg'
    }
  ];

  constructor() { }

  getBoxes(): Observable<Box[]> {
    return of(this.boxesData);
  }

  
}
