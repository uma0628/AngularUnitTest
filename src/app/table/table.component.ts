import { Component, OnInit, Input } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  post: Post;

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * 初期処理
   */
  ngOnInit() {
  }

}
