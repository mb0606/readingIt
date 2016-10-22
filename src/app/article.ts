interface ArticleJSON {
  title: string;
  url: string;
  votes: number;
  description: string;
  author: string;
  urlToImage: string;
  publishedAt: Date;
}

export class Article {

  public publishedAt: Date;

  static fromJSON(json: ArticleJSON) :Article {
    let article = Object.create(Article.prototype);
    console.log("article obj -> ", article)
    return Object.assign(article, json, {
      votes: json.votes ? json.votes : 0,
      imageUrl: json.urlToImage,
      publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date()
    });
  }

  constructor (
    public title: string,
    public description:string,
    public imageUrl:string,
    public votes?: number
  ) {
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }

  public voteUp(): void {
    this.votes = this.votes + 1;
  }
  public voteDown(): void {
    this.votes = this.votes - 1;
  }

}
