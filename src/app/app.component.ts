import { Component, OnInit } from '@angular/core';

import { Post } from './table/post';
import { PostService } from './table/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isDataLoaded = false;

  post: Post;

  /**
   * コンストラクタ
   * @param postService
   */
  constructor(
    private postService: PostService
  ) { }

  /**
   * 初期処理
   */
  ngOnInit(): void {
    this.postService.getPost()
      .then((post: Post) => {
        this.post = new Post(post);
        this.isDataLoaded = true;
      });
  }
}
