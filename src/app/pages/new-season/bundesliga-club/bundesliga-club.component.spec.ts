import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaClubComponent } from './bundesliga-club.component';

describe('BundesligaClubComponent', () => {
  let component: BundesligaClubComponent;
  let fixture: ComponentFixture<BundesligaClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundesligaClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundesligaClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
