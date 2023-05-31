import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzmodalComponent } from './ezmodal.component';

describe('EzmodalComponent', () => {
  let component: EzmodalComponent;
  let fixture: ComponentFixture<EzmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
