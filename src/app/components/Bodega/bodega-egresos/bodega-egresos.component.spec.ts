import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaEgresosComponent } from './bodega-egresos.component';

describe('BodegaEgresosComponent', () => {
  let component: BodegaEgresosComponent;
  let fixture: ComponentFixture<BodegaEgresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaEgresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
