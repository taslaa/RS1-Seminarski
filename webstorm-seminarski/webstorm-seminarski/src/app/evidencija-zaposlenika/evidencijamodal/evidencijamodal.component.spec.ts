import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidencijamodalComponent } from './evidencijamodal.component';

describe('EvidencijamodalComponent', () => {
  let component: EvidencijamodalComponent;
  let fixture: ComponentFixture<EvidencijamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidencijamodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvidencijamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
