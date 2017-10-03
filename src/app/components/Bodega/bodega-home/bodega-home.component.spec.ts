import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaHomeComponent } from './bodega-home.component';

describe('BodegaHomeComponent', () => {
  let component: BodegaHomeComponent;
  let fixture: ComponentFixture<BodegaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
