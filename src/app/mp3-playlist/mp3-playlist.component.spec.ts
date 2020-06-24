import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3PlaylistComponent } from './mp3-playlist.component';

describe('Mp3PlaylistComponent', () => {
  let component: Mp3PlaylistComponent;
  let fixture: ComponentFixture<Mp3PlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mp3PlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
