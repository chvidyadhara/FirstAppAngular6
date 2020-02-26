import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Objectdisplay2Component } from './objectdisplay2.component';

describe('Objectdisplay2Component', () => {
  let component: Objectdisplay2Component;
  let fixture: ComponentFixture<Objectdisplay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Objectdisplay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Objectdisplay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
