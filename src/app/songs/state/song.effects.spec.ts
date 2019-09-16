import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SongEffects } from './song.effects';

describe('SongsEffects', () => {
  let actions$: Observable<any>;
  let effects: SongEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SongEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SongEffects>(SongEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
