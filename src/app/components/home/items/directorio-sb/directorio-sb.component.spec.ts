import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioSbComponent } from './directorio-sb.component';

describe('DirectorioSbComponent', () => {
  let component: DirectorioSbComponent;
  let fixture: ComponentFixture<DirectorioSbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioSbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
