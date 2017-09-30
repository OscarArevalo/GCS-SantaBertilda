import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMedicosComponent } from './adm-medicos.component';

describe('AdmMedicosComponent', () => {
  let component: AdmMedicosComponent;
  let fixture: ComponentFixture<AdmMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
