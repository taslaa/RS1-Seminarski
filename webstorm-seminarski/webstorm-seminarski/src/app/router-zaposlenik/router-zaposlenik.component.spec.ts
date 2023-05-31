import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterZaposlenikComponent } from './router-zaposlenik.component';

describe('RouterZaposlenikComponent', () => {
  let component: RouterZaposlenikComponent;
  let fixture: ComponentFixture<RouterZaposlenikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterZaposlenikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterZaposlenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
