import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ventasGuard } from './ventas.guard';

describe('ventasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ventasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
