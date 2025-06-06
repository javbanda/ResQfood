import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxDetailPage } from './box-detail.page';

describe('BoxDetailPage', () => {
  let component: BoxDetailPage;
  let fixture: ComponentFixture<BoxDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
