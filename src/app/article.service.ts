import { Injectable } from '@angular/core';
import {Article} from "./article";

@Injectable()
export class ArticleService {

  constructor() { }

  public getArticles(): Promise<Article[]> {
    return new Promise (resolve => {
      setTimeout(() => {
        resolve([
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
        ])
      }, 3000);

    })
  }

}
