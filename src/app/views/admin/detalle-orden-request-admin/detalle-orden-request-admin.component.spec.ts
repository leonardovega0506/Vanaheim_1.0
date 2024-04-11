import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenRequestAdminComponent } from './detalle-orden-request-admin.component';

describe('DetalleOrdenRequestAdminComponent', () => {
  let component: DetalleOrdenRequestAdminComponent;
  let fixture: ComponentFixture<DetalleOrdenRequestAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOrdenRequestAdminComponent]
    });
    fixture = TestBed.createComponent(DetalleOrdenRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
