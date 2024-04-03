import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteVendedorComponent } from './listar-cliente-vendedor.component';

describe('ListarClienteVendedorComponent', () => {
  let component: ListarClienteVendedorComponent;
  let fixture: ComponentFixture<ListarClienteVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClienteVendedorComponent]
    });
    fixture = TestBed.createComponent(ListarClienteVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
