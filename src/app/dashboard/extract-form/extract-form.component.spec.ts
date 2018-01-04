import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFormComponent } from './extract-form.component';

describe('ExtractFormComponent', () => {
  let component: ExtractFormComponent;
  let fixture: ComponentFixture<ExtractFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
