import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilleComponent } from './lille.component';

describe('LilleComponent', () => {
  let component: LilleComponent;
  let fixture: ComponentFixture<LilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
