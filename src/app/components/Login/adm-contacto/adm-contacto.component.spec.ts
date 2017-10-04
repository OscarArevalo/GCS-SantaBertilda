import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmContactoComponent } from './adm-contacto.component';

describe('AdmContactoComponent', () => {
  let component: AdmContactoComponent;
  let fixture: ComponentFixture<AdmContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
