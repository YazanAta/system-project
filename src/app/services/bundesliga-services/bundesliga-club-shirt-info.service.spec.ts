import { TestBed } from '@angular/core/testing';

import { BundesligaClubShirtInfoService } from './bundesliga-club-shirt-info.service';

describe('BundesligaClubShirtInfoService', () => {
  let service: BundesligaClubShirtInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundesligaClubShirtInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
