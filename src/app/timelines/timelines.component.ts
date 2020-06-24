import { Component, OnInit } from '@angular/core';
import { NomalService } from '../nomal.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private nomalSevice: NomalService) { }

  ngOnInit(): void {
  }
  onChange(event) {
    this.output = this.nomalSevice.getDiffToNow(event);
  }
}
