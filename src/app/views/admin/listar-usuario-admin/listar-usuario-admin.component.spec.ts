import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuarioAdminComponent } from './listar-usuario-admin.component';

describe('ListarUsuarioAdminComponent', () => {
  let component: ListarUsuarioAdminComponent;
  let fixture: ComponentFixture<ListarUsuarioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUsuarioAdminComponent]
    });
    fixture = TestBed.createComponent(ListarUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
