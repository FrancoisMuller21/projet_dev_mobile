import { TestBed } from '@angular/core/testing';

import { BddVoitureService } from './bdd-voiture.service';

describe('BddVoitureService', () => {
  let service: BddVoitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BddVoitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
