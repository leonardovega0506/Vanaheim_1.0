import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrdenesAdminComponent } from './dashboard-ordenes-admin.component';

describe('DashboardOrdenesAdminComponent', () => {
  let component: DashboardOrdenesAdminComponent;
  let fixture: ComponentFixture<DashboardOrdenesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrdenesAdminComponent]
    });
    fixture = TestBed.createComponent(DashboardOrdenesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
