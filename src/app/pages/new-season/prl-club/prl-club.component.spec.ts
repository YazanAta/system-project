import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrlClubComponent } from './prl-club.component';

describe('PrlClubComponent', () => {
  let component: PrlClubComponent;
  let fixture: ComponentFixture<PrlClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrlClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrlClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
