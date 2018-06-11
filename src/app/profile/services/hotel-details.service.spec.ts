import { TestBed, inject } from '@angular/core/testing';

import { HotelDetailsService } from './hotel-details.service';

describe('HotelDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelDetailsService]
    });
  });

  it('should be created', inject([HotelDetailsService], (service: HotelDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
