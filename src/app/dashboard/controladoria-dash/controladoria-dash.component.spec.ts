import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladoriaDashComponent } from './controladoria-dash.component';

describe('ControladoriaDashComponent', () => {
  let component: ControladoriaDashComponent;
  let fixture: ComponentFixture<ControladoriaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControladoriaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControladoriaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
