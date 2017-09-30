import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEmpComponent } from './servicios-emp.component';

describe('ServiciosEmpComponent', () => {
  let component: ServiciosEmpComponent;
  let fixture: ComponentFixture<ServiciosEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
