import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from '@angular/http'
import { Article} from "./article";
import 'rxjs/add/operator/toPromise'

const baseUrl = 'https://newsapi.org';
const newsApiKey = 'fd3da02704af49269ad8f040c34790bc'

@Injectable()
export class ArticleService {

  constructor( private _http: Http) { }

  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();
    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');
    return this._http
      .get(`${baseUrl}/v1/articles`, {
        search: params
      })
      .toPromise()
      .then( res  => {
        return res.json();
      })
      .then( json => json.articles)
      .then( articles => {
        const list = articles
          .map(article => new Article(
            article.title,
            article.description,
            article.urlToImage
          ))
        console.log('json -> ', list)
        return list;
      })
      .catch(err => {
        console.error('We got a problem', err);
      });
  }

}
