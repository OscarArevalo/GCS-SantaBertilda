import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinecologiaComponent } from './ginecologia.component';

describe('GinecologiaComponent', () => {
  let component: GinecologiaComponent;
  let fixture: ComponentFixture<GinecologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinecologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinecologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
