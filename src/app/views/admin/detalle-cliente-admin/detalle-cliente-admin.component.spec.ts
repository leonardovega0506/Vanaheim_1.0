import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClienteAdminComponent } from './detalle-cliente-admin.component';

describe('DetalleClienteAdminComponent', () => {
  let component: DetalleClienteAdminComponent;
  let fixture: ComponentFixture<DetalleClienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleClienteAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleClienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
