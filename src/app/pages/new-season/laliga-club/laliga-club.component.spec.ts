import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaligaClubComponent } from './laliga-club.component';

describe('LaligaClubComponent', () => {
  let component: LaligaClubComponent;
  let fixture: ComponentFixture<LaligaClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaligaClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaligaClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
