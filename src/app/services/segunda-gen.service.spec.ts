import { TestBed } from '@angular/core/testing';

import { SegundaGenService } from './segunda-gen.service';

describe('SegundaGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SegundaGenService = TestBed.get(SegundaGenService);
    expect(service).toBeTruthy();
  });
});
