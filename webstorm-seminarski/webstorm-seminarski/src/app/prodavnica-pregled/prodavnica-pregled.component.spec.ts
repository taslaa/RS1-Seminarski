import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavnicaPregledComponent } from './prodavnica-pregled.component';

describe('ProdavnicaPregledComponent', () => {
  let component: ProdavnicaPregledComponent;
  let fixture: ComponentFixture<ProdavnicaPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdavnicaPregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavnicaPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
