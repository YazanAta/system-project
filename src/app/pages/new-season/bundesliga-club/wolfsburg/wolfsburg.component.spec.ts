import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolfsburgComponent } from './wolfsburg.component';

describe('WolfsburgComponent', () => {
  let component: WolfsburgComponent;
  let fixture: ComponentFixture<WolfsburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolfsburgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WolfsburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
