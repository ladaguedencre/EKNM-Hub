import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAbuseComponent } from './pokemon-abuse.component';

describe('PokemonAbuseComponent', () => {
  let component: PokemonAbuseComponent;
  let fixture: ComponentFixture<PokemonAbuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAbuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
