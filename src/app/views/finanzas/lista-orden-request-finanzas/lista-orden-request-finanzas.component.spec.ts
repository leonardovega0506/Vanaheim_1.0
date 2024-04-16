import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdenRequestFinanzasComponent } from './lista-orden-request-finanzas.component';

describe('ListaOrdenRequestFinanzasComponent', () => {
  let component: ListaOrdenRequestFinanzasComponent;
  let fixture: ComponentFixture<ListaOrdenRequestFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdenRequestFinanzasComponent]
    });
    fixture = TestBed.createComponent(ListaOrdenRequestFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
