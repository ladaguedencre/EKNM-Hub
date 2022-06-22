import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextParagraphComponent } from './text-paragraph.component';

describe('TextParagraphComponent', () => {
  let component: TextParagraphComponent;
  let fixture: ComponentFixture<TextParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
