import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmExamResComponent } from './adm-exam-res.component';

describe('AdmExamResComponent', () => {
  let component: AdmExamResComponent;
  let fixture: ComponentFixture<AdmExamResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmExamResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmExamResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
