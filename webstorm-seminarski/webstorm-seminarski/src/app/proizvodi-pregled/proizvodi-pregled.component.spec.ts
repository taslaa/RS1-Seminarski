import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodiPregledComponent } from './proizvodi-pregled.component';

describe('ProizvodiPregledComponent', () => {
  let component: ProizvodiPregledComponent;
  let fixture: ComponentFixture<ProizvodiPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodiPregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodiPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
