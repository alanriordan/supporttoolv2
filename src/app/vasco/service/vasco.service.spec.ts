import { TestBed } from '@angular/core/testing';

import { VascoService } from './vasco.service';

describe('VascoService', () => {
  let service: VascoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VascoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
