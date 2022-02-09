import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupaComponent } from './pupa.component';

describe('PupaComponent', () => {
  let component: PupaComponent;
  let fixture: ComponentFixture<PupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
