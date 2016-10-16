import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from '@angular/http';

import { environment } from '../environments/environment'
import { Article} from "./article";
import 'rxjs/add/operator/toPromise'



@Injectable()
export class ArticleService {

  constructor( private _http: Http) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', 'reddit-r-all');
    return this._http
      .get(`${environment.baseUrl}/v1/articles`, {
        search: params
      })
      .toPromise()
      .then( res  => {
        return res.json();
      })
      .then( json => json.articles)
      .then( articles => {
        return articles
          .map(article =>
              Article.fromJSON(article)
          )
      })
      .catch(err => {
        console.error('We got a problem', err);
      });
  }

}
