import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router'

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
    private _articleService: ArticleService,
    private _activeRoute: ActivatedRoute
  ) {
    this.articles = _articleService.orderedArticles;
  }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      const sourceKey = params['sourceKey'];
      this._articleService.updateArticles(sourceKey);
    });
    this._articleService.getArticles()
  }

}
