import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaSedesComponent } from './bodega-sedes.component';

describe('BodegaSedesComponent', () => {
  let component: BodegaSedesComponent;
  let fixture: ComponentFixture<BodegaSedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaSedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
