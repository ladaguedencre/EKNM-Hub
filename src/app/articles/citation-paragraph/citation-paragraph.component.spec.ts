import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationParagraphComponent } from './citation-paragraph.component';

describe('CitationParagraphComponent', () => {
  let component: CitationParagraphComponent;
  let fixture: ComponentFixture<CitationParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
