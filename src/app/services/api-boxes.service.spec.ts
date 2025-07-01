import { TestBed } from '@angular/core/testing';

import { ApiBoxesService } from './api-boxes.service';

describe('ApiBoxesService', () => {
  let service: ApiBoxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBoxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
