import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClienteVendedorComponent } from './detalle-cliente-vendedor.component';

describe('DetalleClienteVendedorComponent', () => {
  let component: DetalleClienteVendedorComponent;
  let fixture: ComponentFixture<DetalleClienteVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleClienteVendedorComponent]
    });
    fixture = TestBed.createComponent(DetalleClienteVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
