import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmlistComponent } from './farmlist.component';

describe('FarmlistComponent', () => {
  let component: FarmlistComponent;
  let fixture: ComponentFixture<FarmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
