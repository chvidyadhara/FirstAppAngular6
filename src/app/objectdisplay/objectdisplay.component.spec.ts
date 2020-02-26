import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectdisplayComponent } from './objectdisplay.component';

describe('ObjectdisplayComponent', () => {
  let component: ObjectdisplayComponent;
  let fixture: ComponentFixture<ObjectdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
