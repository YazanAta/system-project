import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtleticoComponent } from './atletico.component';

describe('AtleticoComponent', () => {
  let component: AtleticoComponent;
  let fixture: ComponentFixture<AtleticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtleticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtleticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
