import { TestBed, inject } from '@angular/core/testing';

import { MasterReportsService } from './master-reports.service';

describe('MasterReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterReportsService]
    });
  });

  it('should be created', inject([MasterReportsService], (service: MasterReportsService) => {
    expect(service).toBeTruthy();
  }));
});
