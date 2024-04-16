import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenRequestVendedorComponent } from './detalle-orden-request-vendedor.component';

describe('DetalleOrdenRequestVendedorComponent', () => {
  let component: DetalleOrdenRequestVendedorComponent;
  let fixture: ComponentFixture<DetalleOrdenRequestVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenRequestVendedorComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenRequestVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
