import { TestBed } from '@angular/core/testing';

import { PrlClubShirtInfoService } from './prl-club-shirt-info.service';

describe('PrlClubShirtInfoService', () => {
  let service: PrlClubShirtInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrlClubShirtInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
