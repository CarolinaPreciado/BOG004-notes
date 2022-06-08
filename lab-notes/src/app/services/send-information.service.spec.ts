import { TestBed } from '@angular/core/testing';

import { SendInformationService } from './send-information.service';

describe('SendInformationService', () => {
  let service: SendInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
