import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWatchablesListComponent } from './create-watchables-list.component';

describe('CreateWatchablesListComponent', () => {
  let component: CreateWatchablesListComponent;
  let fixture: ComponentFixture<CreateWatchablesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWatchablesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWatchablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
