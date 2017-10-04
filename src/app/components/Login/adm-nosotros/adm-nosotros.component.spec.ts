import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNosotrosComponent } from './adm-nosotros.component';

describe('AdmNosotrosComponent', () => {
  let component: AdmNosotrosComponent;
  let fixture: ComponentFixture<AdmNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
