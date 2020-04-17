import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHComponent } from './test-h.component';

describe('TestHComponent', () => {
  let component: TestHComponent;
  let fixture: ComponentFixture<TestHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
