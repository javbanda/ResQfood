import { Component, OnInit } from '@angular/core';
import { ApiBoxesService, Box } from '../services/api-boxes.service';

import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.page.html',
  styleUrls: ['./boxes.page.scss'],
  standalone: true,               
  imports: [IonicModule, CommonModule]  
})
export class BoxesPage implements OnInit {
  boxes: Box[] = [];
  boxesFiltrados: Box[] = [];

  constructor(private apiBoxes: ApiBoxesService) {}

  ngOnInit() {
    this.apiBoxes.getBoxes().subscribe((data: Box[]) => {
      this.boxes = data;
      this.boxesFiltrados = data;
    });
  }

  buscar(event: any) {
    const texto = event.detail.value?.toLowerCase() || '';
    this.boxesFiltrados = this.boxes.filter(box =>
      box.titulo.toLowerCase().includes(texto) ||
      box.restaurante.toLowerCase().includes(texto)
    );
  }
}
