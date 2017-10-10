export class Post {

  public title: number;

  public author: string;

  /**
   * コンストラクタ
   * @param post
   */
  constructor(
    post: any
  ) {
    this.title = post.title;
    this.author = post.author;
  }
}
