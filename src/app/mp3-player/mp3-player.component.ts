import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mp3Service } from '../mp3.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css']
})
export class Mp3PlayerComponent implements OnInit {
  song: any;
  sub: Subscription;
  constructor(private mp3Service: Mp3Service,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.mp3Service.find(id);
    });
  }
  getSrc() {
    const url = 'https://www.nhaccuatui.com/mh/auto/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // getSrcVideo() {
  //   const url = 'https://youtu.be/' + this.song.id;
  //   return this.domSanitizer.bypassSecurityTrustUrl(url);
  // }

}
