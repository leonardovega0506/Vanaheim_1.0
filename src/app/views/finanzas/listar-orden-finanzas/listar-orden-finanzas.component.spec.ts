import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenFinanzasComponent } from './listar-orden-finanzas.component';

describe('ListarOrdenFinanzasComponent', () => {
  let component: ListarOrdenFinanzasComponent;
  let fixture: ComponentFixture<ListarOrdenFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOrdenFinanzasComponent]
    });
    fixture = TestBed.createComponent(ListarOrdenFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
