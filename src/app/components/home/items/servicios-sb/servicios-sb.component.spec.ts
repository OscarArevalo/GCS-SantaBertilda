import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSbComponent } from './servicios-sb.component';

describe('ServiciosSbComponent', () => {
  let component: ServiciosSbComponent;
  let fixture: ComponentFixture<ServiciosSbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
