import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmodalComponent } from './dmodal.component';

describe('DmodalComponent', () => {
  let component: DmodalComponent;
  let fixture: ComponentFixture<DmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
