import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomView2Component } from './zoom-view2.component';

describe('ZoomView2Component', () => {
  let component: ZoomView2Component;
  let fixture: ComponentFixture<ZoomView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomView2Component]
    });
    fixture = TestBed.createComponent(ZoomView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
