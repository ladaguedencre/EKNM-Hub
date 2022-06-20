import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScpWaComponent } from './scp-wa.component';

describe('ScpWaComponent', () => {
  let component: ScpWaComponent;
  let fixture: ComponentFixture<ScpWaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScpWaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScpWaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
