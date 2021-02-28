import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchableSearchBoxComponent } from './watchable-search-box.component';

describe('WatchableSearchBoxComponent', () => {
  let component: WatchableSearchBoxComponent;
  let fixture: ComponentFixture<WatchableSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchableSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchableSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
