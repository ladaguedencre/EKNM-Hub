import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedParagraphComponent } from './combined-paragraph.component';

describe('CombinedParagraphComponent', () => {
  let component: CombinedParagraphComponent;
  let fixture: ComponentFixture<CombinedParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
