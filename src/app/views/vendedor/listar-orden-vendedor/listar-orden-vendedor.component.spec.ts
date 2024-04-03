import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenVendedorComponent } from './listar-orden-vendedor.component';

describe('ListarOrdenVendedorComponent', () => {
  let component: ListarOrdenVendedorComponent;
  let fixture: ComponentFixture<ListarOrdenVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOrdenVendedorComponent]
    });
    fixture = TestBed.createComponent(ListarOrdenVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
