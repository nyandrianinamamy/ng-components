import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxFlatButtonComponent } from './dx-flat-button.component';

describe('DxFlatButtonComponent', () => {
  let component: DxFlatButtonComponent;
  let fixture: ComponentFixture<DxFlatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxFlatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxFlatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
