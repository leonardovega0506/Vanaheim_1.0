import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { finanzasGuard } from './finanzas.guard';

describe('finanzasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => finanzasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
