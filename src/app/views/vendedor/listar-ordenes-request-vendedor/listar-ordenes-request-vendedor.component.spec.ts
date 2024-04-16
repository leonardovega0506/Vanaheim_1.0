import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenesRequestVendedorComponent } from './listar-ordenes-request-vendedor.component';

describe('ListarOrdenesRequestVendedorComponent', () => {
  let component: ListarOrdenesRequestVendedorComponent;
  let fixture: ComponentFixture<ListarOrdenesRequestVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOrdenesRequestVendedorComponent]
    });
    fixture = TestBed.createComponent(ListarOrdenesRequestVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
