import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVendedorAdminComponent } from './detalle-vendedor-admin.component';

describe('DetalleVendedorAdminComponent', () => {
  let component: DetalleVendedorAdminComponent;
  let fixture: ComponentFixture<DetalleVendedorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleVendedorAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleVendedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
