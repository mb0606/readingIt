import { Component, Input } from '@angular/core';


class Article {
  public publishedAt: Date;
  constructor (
    public title: string,
    public description:string,
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

@Component({
  selector: 'app-grandchild',
  template: `

 
    <h1>++++++++++++++++++++ {{ppp.title}}</h1>
  `
})

export class grandChildComponent {
  @Input() ppp: Object;
}

@Component({
  selector: 'app-sidebar',
  template: `

    <div id="sidebar">
      <h1>This is the H1 </h1>
    </div>
  `
})

export class SidebarComponent {

}


@Component({
  selector: 'app-article',
  template: `
    <!--<app-grandchild     -->
    <!--[ppp]="article"></app-grandchild>-->
    <div class="image">
      <img src="https://placekitten.com/g/400/300" alt="">
    </div>
    <div class="content">
      <div class="header">
        <h2>{{article.title}}</h2>
      </div>
      <div class="meta">
        <span class="ui blue small label">
          <i class="heart icon"></i>
          <div class="detail">
            {{article.votes}}
          </div>              
        </span>
       <span class="ui right floated">
         <a 
            (click)="upvote()"  
            class="ui small label">
          <i class="arrow up icon"></i>
          upvote
        </a>
         <a 
           (click)="downvote()"  
            class="ui small label">
          <i class="arrow down icon"></i>
          downvote
        </a>            
       </span>
      </div>
      <div class="meta date">
        {{article.publishedAt | date:'medium' }}
      </div>
      <div class="meta description">
        <p>{{article.description}}</p>
      </div>
      <div class="extra">
        <a 
          href="#"
          target="_blank"
          class="ui right floated button primary">
          Read more <i class="right chevron icon"></i>
        </a>
      </div>
    </div>
  `

})
export class ArticleComponent {
  @Input() article: Object;

  upvote() {
    console.log("Called upvote function in ArticleCom")
    this.article.voteUp();
  }
  downvote() {
    console.log("Called downvote function in ArticleCom")
    this.article.voteDown();
  }
}

@Component({
  selector: 'app-root',
  template: `
   <div class="ui container">
    <app-sidebar ></app-sidebar>

    <div class="ui divided items">
    <app-article 
    class="item"
    *ngFor="let article of articles"
    [article]="article"></app-article>

    </div>
   
  </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor( ) {
    this.articles = [
        new Article(
        'The ang 2 screencast',
        'This is an easy way to learn typescript',
         10),
        new Article(
        'Fullstack react',
        'This is an easy way do React'),
        new Article(
        'Vue is new',
         'This is about Vue')
    ]

  }
}









