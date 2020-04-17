import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmcreateComponent } from './farmcreate.component';

describe('FarmcreateComponent', () => {
  let component: FarmcreateComponent;
  let fixture: ComponentFixture<FarmcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
