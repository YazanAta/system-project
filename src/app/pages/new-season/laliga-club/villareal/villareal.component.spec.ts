import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillarealComponent } from './villareal.component';

describe('VillarealComponent', () => {
  let component: VillarealComponent;
  let fixture: ComponentFixture<VillarealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillarealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillarealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
