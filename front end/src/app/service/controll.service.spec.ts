import { TestBed } from '@angular/core/testing';

import { ControllService } from './controll.service';

describe('ControllService', () => {
  let service: ControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
