import { TestBed } from '@angular/core/testing';

import { KorgService } from './korg.service';

describe('KorgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KorgService = TestBed.get(KorgService);
    expect(service).toBeTruthy();
  });
});
