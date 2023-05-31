import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAdminComponent } from './chart-admin.component';

describe('ChartAdminComponent', () => {
  let component: ChartAdminComponent;
  let fixture: ComponentFixture<ChartAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
