import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVanaheimComponent } from './login-vanaheim.component';

describe('LoginVanaheimComponent', () => {
  let component: LoginVanaheimComponent;
  let fixture: ComponentFixture<LoginVanaheimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVanaheimComponent]
    });
    fixture = TestBed.createComponent(LoginVanaheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
