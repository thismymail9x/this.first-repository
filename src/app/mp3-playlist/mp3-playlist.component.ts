import { Component, OnInit } from '@angular/core';
import { Mp3Service } from '../mp3.service';

@Component({
  selector: 'app-mp3-playlist',
  templateUrl: './mp3-playlist.component.html',
  styleUrls: ['./mp3-playlist.component.css']
})
export class Mp3PlaylistComponent implements OnInit {
  
  constructor(public mp3Service: Mp3Service) { 

  }

  ngOnInit(): void {
  
  }


}
