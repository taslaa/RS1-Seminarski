import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigacijaEvidencijaComponent } from './navigacija-evidencija.component';

describe('NavigacijaEvidencijaComponent', () => {
  let component: NavigacijaEvidencijaComponent;
  let fixture: ComponentFixture<NavigacijaEvidencijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigacijaEvidencijaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigacijaEvidencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
