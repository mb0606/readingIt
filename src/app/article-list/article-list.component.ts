import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import {ArticleService} from "../article.service";
import {Article} from "../article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private articles: Observable<Article[]>;

  constructor(
    private _articleService: ArticleService
  ) {
    this.articles = _articleService.orderedArticles;
  }

  ngOnInit() {
    this._articleService.getArticles()
  }

}
