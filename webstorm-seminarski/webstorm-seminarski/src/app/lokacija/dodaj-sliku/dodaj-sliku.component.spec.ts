import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajSlikuComponent } from './dodaj-sliku.component';

describe('DodajSlikuComponent', () => {
  let component: DodajSlikuComponent;
  let fixture: ComponentFixture<DodajSlikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajSlikuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajSlikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
