import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewComponent } from './zoom-view.component';

describe('ZoomViewComponent', () => {
  let component: ZoomViewComponent;
  let fixture: ComponentFixture<ZoomViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomViewComponent]
    });
    fixture = TestBed.createComponent(ZoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
