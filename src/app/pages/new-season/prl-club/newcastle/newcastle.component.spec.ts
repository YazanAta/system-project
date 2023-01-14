import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcastleComponent } from './newcastle.component';

describe('NewcastleComponent', () => {
  let component: NewcastleComponent;
  let fixture: ComponentFixture<NewcastleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcastleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
