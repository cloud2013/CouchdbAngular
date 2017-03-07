/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConcertAllService } from './concert-all.service';

describe('ConcertAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcertAllService]
    });
  });

  it('should ...', inject([ConcertAllService], (service: ConcertAllService) => {
    expect(service).toBeTruthy();
  }));
});
