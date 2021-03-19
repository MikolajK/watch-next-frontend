import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchNextNavigationComponent } from './watch-next-navigation.component';

describe('WatchNextNavigationComponent', () => {
  let component: WatchNextNavigationComponent;
  let fixture: ComponentFixture<WatchNextNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchNextNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchNextNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
