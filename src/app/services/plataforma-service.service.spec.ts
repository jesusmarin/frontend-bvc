import { TestBed } from '@angular/core/testing';

import { PlataformaServiceService } from './plataforma-service.service';

describe('PlataformaServiceService', () => {
  let service: PlataformaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlataformaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
