import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewItemComponent } from './brew-item.component';

describe('BrewItemComponent', () => {
  let component: BrewItemComponent;
  let fixture: ComponentFixture<BrewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
