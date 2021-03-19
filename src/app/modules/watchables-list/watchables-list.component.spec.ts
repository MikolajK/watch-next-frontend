import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchablesListComponent } from './watchables-list.component';

describe('WatchablesListComponent', () => {
  let component: WatchablesListComponent;
  let fixture: ComponentFixture<WatchablesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchablesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
