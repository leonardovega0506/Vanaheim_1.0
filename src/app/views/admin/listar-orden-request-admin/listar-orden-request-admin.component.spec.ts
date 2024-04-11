import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrdenRequestAdminComponent } from './listar-orden-request-admin.component';

describe('ListarOrdenRequestAdminComponent', () => {
  let component: ListarOrdenRequestAdminComponent;
  let fixture: ComponentFixture<ListarOrdenRequestAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOrdenRequestAdminComponent]
    });
    fixture = TestBed.createComponent(ListarOrdenRequestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
