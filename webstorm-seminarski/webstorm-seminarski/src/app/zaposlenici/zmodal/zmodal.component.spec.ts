import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmodalComponent } from './zmodal.component';

describe('ZmodalComponent', () => {
  let component: ZmodalComponent;
  let fixture: ComponentFixture<ZmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
