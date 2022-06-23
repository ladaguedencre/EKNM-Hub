import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonParagraphComponent } from './button-paragraph.component';

describe('ButtonParagraphComponent', () => {
  let component: ButtonParagraphComponent;
  let fixture: ComponentFixture<ButtonParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
