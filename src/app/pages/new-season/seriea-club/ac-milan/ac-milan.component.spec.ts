import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcMilanComponent } from './ac-milan.component';

describe('AcMilanComponent', () => {
  let component: AcMilanComponent;
  let fixture: ComponentFixture<AcMilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcMilanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcMilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
