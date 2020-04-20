import { TestBed } from '@angular/core/testing';

import { StarWarsServiceService } from './star-wars-service.service';

describe('StarWarsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarsServiceService = TestBed.get(StarWarsServiceService);
    expect(service).toBeTruthy();
  });
});
