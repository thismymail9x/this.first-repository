import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';
import { Mp3PlaylistComponent } from './mp3-playlist/mp3-playlist.component';
import { VideosComponent } from './videos/videos.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent,
  },
  {
    path: 'mp3-playlist',
    component: Mp3PlaylistComponent,
    children: [{
      path: ':id',
      component: Mp3PlayerComponent
    }]
  },
  {
    path: 'video',
    component: VideoplayerComponent,
    children: [{
      path: 'id',
      component: VideosComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
