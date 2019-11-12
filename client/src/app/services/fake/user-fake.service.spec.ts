import { TestBed } from '@angular/core/testing';

import { UserFakeService } from './user-fake.service';

describe('UserFakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFakeService = TestBed.get(UserFakeService);
    expect(service).toBeTruthy();
  });
});
