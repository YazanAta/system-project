import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayernComponent } from './bayern.component';

describe('BayernComponent', () => {
  let component: BayernComponent;
  let fixture: ComponentFixture<BayernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BayernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
