import { TestBed } from '@angular/core/testing';

import { BundesligaClubsService } from './bundesliga-clubs.service';

describe('BundesligaClubsService', () => {
  let service: BundesligaClubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundesligaClubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
