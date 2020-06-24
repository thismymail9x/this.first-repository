import { Component, OnInit } from '@angular/core';
import { Mp3Service } from '../mp3.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
video = '';

  constructor(private mp3Service: Mp3Service,
    private activatedRoute: ActivatedRoute,
    private domSanitizer :DomSanitizer) { }

  ngOnInit(): void {
  }


}
