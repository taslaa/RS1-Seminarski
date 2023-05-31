import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenikChartComponent } from './zaposlenik-chart.component';

describe('ZaposlenikChartComponent', () => {
  let component: ZaposlenikChartComponent;
  let fixture: ComponentFixture<ZaposlenikChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenikChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposlenikChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
