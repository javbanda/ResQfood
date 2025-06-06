import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.page.html',
  styleUrls: ['./box-detail.page.scss'],
  standalone: false,
})
export class BoxDetailPage {
  oferta: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params['box']) {
        this.oferta = JSON.parse(params['box']);
      }
    });
  }
}
