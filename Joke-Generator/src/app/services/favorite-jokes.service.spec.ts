import { TestBed } from '@angular/core/testing';

import { FavoriteJokesService } from './favorite-jokes.service';

describe('FavoriteJokesService', () => {
  let service: FavoriteJokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteJokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
