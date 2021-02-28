import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchableSearchResultsComponent } from './watchable-search-results.component';

describe('WatchableSearchResultsComponent', () => {
  let component: WatchableSearchResultsComponent;
  let fixture: ComponentFixture<WatchableSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchableSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchableSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
