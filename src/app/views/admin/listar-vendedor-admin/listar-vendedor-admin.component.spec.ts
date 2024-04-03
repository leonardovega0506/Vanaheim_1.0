import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVendedorAdminComponent } from './listar-vendedor-admin.component';

describe('ListarVendedorAdminComponent', () => {
  let component: ListarVendedorAdminComponent;
  let fixture: ComponentFixture<ListarVendedorAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVendedorAdminComponent]
    });
    fixture = TestBed.createComponent(ListarVendedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
