import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenAdminComponent } from './detalle-orden-admin.component';

describe('DetalleOrdenAdminComponent', () => {
  let component: DetalleOrdenAdminComponent;
  let fixture: ComponentFixture<DetalleOrdenAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
