import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmodalComponent } from './kmodal.component';

describe('KmodalComponent', () => {
  let component: KmodalComponent;
  let fixture: ComponentFixture<KmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
