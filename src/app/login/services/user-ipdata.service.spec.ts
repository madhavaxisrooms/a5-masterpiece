import { TestBed, inject } from '@angular/core/testing';

import { UserIpdataService } from './user-ipdata.service';

describe('UserIpdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIpdataService]
    });
  });

  it('should be created', inject([UserIpdataService], (service: UserIpdataService) => {
    expect(service).toBeTruthy();
  }));
});
