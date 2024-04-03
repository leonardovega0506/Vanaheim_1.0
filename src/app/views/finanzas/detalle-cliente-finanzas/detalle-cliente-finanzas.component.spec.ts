import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleClienteFinanzasComponent } from './detalle-cliente-finanzas.component';

describe('DetalleClienteFinanzasComponent', () => {
  let component: DetalleClienteFinanzasComponent;
  let fixture: ComponentFixture<DetalleClienteFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleClienteFinanzasComponent]
    });
    fixture = TestBed.createComponent(DetalleClienteFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
