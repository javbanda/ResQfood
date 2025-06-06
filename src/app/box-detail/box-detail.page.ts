import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.page.html',
  styleUrls: ['./box-detail.page.scss'],
  standalone: false,
})
export class BoxDetailPage implements OnInit {
  oferta: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['box']) {
        try {
          this.oferta = JSON.parse(params['box']);
        } catch (e) {
          console.error('Error al parsear la oferta:', e);
          this.oferta = null;
        }
      }
    });
  }
}

