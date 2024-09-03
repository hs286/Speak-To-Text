import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybackHandlerComponent } from './playback-handler.component';

describe('PlaybackHandlerComponent', () => {
  let component: PlaybackHandlerComponent;
  let fixture: ComponentFixture<PlaybackHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
