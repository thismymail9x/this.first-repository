import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';
import { Mp3PlaylistComponent } from './mp3-playlist/mp3-playlist.component';
import { VideosComponent } from './videos/videos.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    Mp3PlayerComponent,
    Mp3PlaylistComponent,
    VideosComponent,
    VideoplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
