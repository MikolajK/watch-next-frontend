import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WatchableService } from './watchable.service';

describe('WatchableService', () => {
  let service: WatchableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WatchableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
