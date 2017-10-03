import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDeExamenesComponent } from './resultados-de-examenes.component';

describe('ResultadosDeExamenesComponent', () => {
  let component: ResultadosDeExamenesComponent;
  let fixture: ComponentFixture<ResultadosDeExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosDeExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosDeExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
