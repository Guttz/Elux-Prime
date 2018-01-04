import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdevelopedComponent } from './notdeveloped.component';

describe('NotdevelopedComponent', () => {
  let component: NotdevelopedComponent;
  let fixture: ComponentFixture<NotdevelopedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotdevelopedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotdevelopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
