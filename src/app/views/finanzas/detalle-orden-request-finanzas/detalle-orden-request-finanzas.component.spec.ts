import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenRequestFinanzasComponent } from './detalle-orden-request-finanzas.component';

describe('DetalleOrdenRequestFinanzasComponent', () => {
  let component: DetalleOrdenRequestFinanzasComponent;
  let fixture: ComponentFixture<DetalleOrdenRequestFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenRequestFinanzasComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenRequestFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
