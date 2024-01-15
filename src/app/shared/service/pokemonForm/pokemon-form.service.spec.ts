import { TestBed } from '@angular/core/testing';

import { PokemonFormService } from './pokemon-form.service';

describe('PokemonFormService', () => {
  let service: PokemonFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
