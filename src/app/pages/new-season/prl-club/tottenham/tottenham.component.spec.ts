import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TottenhamComponent } from './tottenham.component';

describe('TottenhamComponent', () => {
  let component: TottenhamComponent;
  let fixture: ComponentFixture<TottenhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TottenhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TottenhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
