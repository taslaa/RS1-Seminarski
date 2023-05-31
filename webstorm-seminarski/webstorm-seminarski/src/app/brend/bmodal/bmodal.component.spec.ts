import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmodalComponent } from './bmodal.component';

describe('BmodalComponent', () => {
  let component: BmodalComponent;
  let fixture: ComponentFixture<BmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
