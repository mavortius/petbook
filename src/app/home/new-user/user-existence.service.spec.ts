import { TestBed } from '@angular/core/testing';

import { UserExistenceService } from './user-existence.service';

describe('UserExistenceService', () => {
  let service: UserExistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
