import { TestBed } from '@angular/core/testing';

import { IsUserConnectedGuard } from './is-user-connected.guard';

describe('IsUserConnectedGuard', () => {
  let guard: IsUserConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUserConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
