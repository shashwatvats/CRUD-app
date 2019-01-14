import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn:'root'})
export class PostsService{
    public posts:Post[]=[];

    constructor(private http:HttpClient){}

    getPosts(){
        this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/posts')
        .subscribe((postData)=>{
            this.posts=postData.posts;
        });
        return this.posts;
    }
    addPost(title:string,content:string){
        const post:Post={id:null,title:title,content:content};
        this.posts.push(post);
    }
}