import { TestBed, inject } from '@angular/core/testing';

import { CreateHotelService } from './create-hotel.service';

describe('CreateHotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateHotelService]
    });
  });

  it('should be created', inject([CreateHotelService], (service: CreateHotelService) => {
    expect(service).toBeTruthy();
  }));
});
