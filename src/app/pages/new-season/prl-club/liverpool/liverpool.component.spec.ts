import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverpoolComponent } from './liverpool.component';

describe('LiverpoolComponent', () => {
  let component: LiverpoolComponent;
  let fixture: ComponentFixture<LiverpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiverpoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiverpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
