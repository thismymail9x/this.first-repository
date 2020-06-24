import { Component, OnInit } from '@angular/core';
import { Mp3Service } from '../mp3.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private mp3Service: Mp3Service) { }

  ngOnInit(): void {
  }

}
