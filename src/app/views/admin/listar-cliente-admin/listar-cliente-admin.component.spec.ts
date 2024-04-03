import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteAdminComponent } from './listar-cliente-admin.component';

describe('ListarClienteAdminComponent', () => {
  let component: ListarClienteAdminComponent;
  let fixture: ComponentFixture<ListarClienteAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClienteAdminComponent]
    });
    fixture = TestBed.createComponent(ListarClienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
