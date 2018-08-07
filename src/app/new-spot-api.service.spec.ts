import { TestBed, inject } from '@angular/core/testing';

import { NewSpotApiService } from './new-spot-api.service';

describe('NewSpotApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewSpotApiService]
    });
  });

  it('should be created', inject([NewSpotApiService], (service: NewSpotApiService) => {
    expect(service).toBeTruthy();
  }));
});
