import { TestBed } from '@angular/core/testing';

import { CamarasService } from './camaras.service';

describe('CamarasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamarasService = TestBed.get(CamarasService);
    expect(service).toBeTruthy();
  });
});
