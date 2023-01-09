import { TestBed } from '@angular/core/testing';

import { GenIpServiceService } from './gen-ip-service.service';

describe('GenIpServiceService', () => {
  let service: GenIpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenIpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
