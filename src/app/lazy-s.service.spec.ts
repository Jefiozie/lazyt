import { TestBed } from '@angular/core/testing';

import { LazySService } from './lazy-s.service';

describe('LazySService', () => {
  let service: LazySService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazySService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
