import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  onaddpost(form:NgForm){
    if(form.valid){
   this.postsSevice.addPost(form.value.title,form.value.content)
   form.resetForm();
    }
    else{
      return 0;
    }
  }

  
  constructor(public postsSevice : PostsService) { }

  ngOnInit() {
  }

}
