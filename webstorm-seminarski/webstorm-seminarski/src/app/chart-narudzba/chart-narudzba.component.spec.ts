import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNarudzbaComponent } from './chart-narudzba.component';

describe('ChartNarudzbaComponent', () => {
  let component: ChartNarudzbaComponent;
  let fixture: ComponentFixture<ChartNarudzbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartNarudzbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartNarudzbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
