import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidashboardComponent } from './aidashboard.component';

describe('AidashboardComponent', () => {
  let component: AidashboardComponent;
  let fixture: ComponentFixture<AidashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
