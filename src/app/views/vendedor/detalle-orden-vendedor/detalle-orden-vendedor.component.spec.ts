import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenVendedorComponent } from './detalle-orden-vendedor.component';

describe('DetalleOrdenVendedorComponent', () => {
  let component: DetalleOrdenVendedorComponent;
  let fixture: ComponentFixture<DetalleOrdenVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenVendedorComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
