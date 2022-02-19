import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewPageComponent } from './brew-page.component';

describe('BrewPageComponent', () => {
  let component: BrewPageComponent;
  let fixture: ComponentFixture<BrewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
