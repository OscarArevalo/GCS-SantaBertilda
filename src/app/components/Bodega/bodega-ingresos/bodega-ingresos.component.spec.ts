import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaIngresosComponent } from './bodega-ingresos.component';

describe('BodegaIngresosComponent', () => {
  let component: BodegaIngresosComponent;
  let fixture: ComponentFixture<BodegaIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
