import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposlenikPanelComponent } from './zaposlenik-panel.component';

describe('ZaposlenikPanelComponent', () => {
  let component: ZaposlenikPanelComponent;
  let fixture: ComponentFixture<ZaposlenikPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposlenikPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaposlenikPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
