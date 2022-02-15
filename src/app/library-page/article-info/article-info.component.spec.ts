import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInfoComponent } from './article-info.component';

describe('ArticleInfoComponent', () => {
  let component: ArticleInfoComponent;
  let fixture: ComponentFixture<ArticleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
