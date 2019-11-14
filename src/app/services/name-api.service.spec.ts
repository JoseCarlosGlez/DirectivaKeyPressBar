import { TestBed } from '@angular/core/testing';

import { NameApiService } from './name-api.service';

describe('NameApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameApiService = TestBed.get(NameApiService);
    expect(service).toBeTruthy();
  });
});
