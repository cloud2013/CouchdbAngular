/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CouchBaseService } from './couch-base.service';

describe('CouchBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouchBaseService]
    });
  });

  it('should ...', inject([CouchBaseService], (service: CouchBaseService) => {
    expect(service).toBeTruthy();
  }));
});
