import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedParagraphComponent } from './formatted-paragraph.component';

describe('FormattedParagraphComponent', () => {
  let component: FormattedParagraphComponent;
  let fixture: ComponentFixture<FormattedParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattedParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
