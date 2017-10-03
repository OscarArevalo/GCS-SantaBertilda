import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaReportesComponent } from './bodega-reportes.component';

describe('BodegaReportesComponent', () => {
  let component: BodegaReportesComponent;
  let fixture: ComponentFixture<BodegaReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
