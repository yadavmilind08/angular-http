import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
