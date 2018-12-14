import { TestBed } from '@angular/core/testing';

import { AutenService } from './auten.service';

describe('AutenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenService = TestBed.get(AutenService);
    expect(service).toBeTruthy();
  });
});
