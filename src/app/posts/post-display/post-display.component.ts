import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  @Input() posts=[];
  constructor() { }

  ngOnInit() {
  }

}
