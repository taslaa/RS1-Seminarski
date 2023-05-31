import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmodalComponent } from './prmodal.component';

describe('PrmodalComponent', () => {
  let component: PrmodalComponent;
  let fixture: ComponentFixture<PrmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
