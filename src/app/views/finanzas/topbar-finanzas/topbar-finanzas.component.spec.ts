import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarFinanzasComponent } from './topbar-finanzas.component';

describe('TopbarFinanzasComponent', () => {
  let component: TopbarFinanzasComponent;
  let fixture: ComponentFixture<TopbarFinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarFinanzasComponent]
    });
    fixture = TestBed.createComponent(TopbarFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
