import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajmodalComponent } from './dodajmodal.component';

describe('DodajmodalComponent', () => {
  let component: DodajmodalComponent;
  let fixture: ComponentFixture<DodajmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
