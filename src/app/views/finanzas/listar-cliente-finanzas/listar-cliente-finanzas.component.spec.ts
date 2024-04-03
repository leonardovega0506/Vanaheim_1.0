import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteFinanzasComponent } from './listar-cliente-finanzas.component';

describe('ListarClienteFinanzasComponent', () => {
  let component: ListarClienteFinanzasComponent;
  let fixture: ComponentFixture<ListarClienteFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClienteFinanzasComponent]
    });
    fixture = TestBed.createComponent(ListarClienteFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
