import { Component, OnInit} from '@angular/core';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  posts:Post[]=[];
  postsService:PostsService
  constructor(postsService : PostsService) { 
    this.postsService=postsService;
  }

  ngOnInit() {
    this.posts=this.postsService.getPosts();
  }

}
