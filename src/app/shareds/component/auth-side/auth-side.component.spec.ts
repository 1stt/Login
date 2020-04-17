import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSideComponent } from './auth-side.component';

describe('AuthSideComponent', () => {
  let component: AuthSideComponent;
  let fixture: ComponentFixture<AuthSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
