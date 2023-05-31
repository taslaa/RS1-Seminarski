import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencijaZaposlenikaComponent } from './evidencija-zaposlenika.component';

describe('EvidencijaZaposlenikaComponent', () => {
  let component: EvidencijaZaposlenikaComponent;
  let fixture: ComponentFixture<EvidencijaZaposlenikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencijaZaposlenikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidencijaZaposlenikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
