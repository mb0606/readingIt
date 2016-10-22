import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private sources: Observable<any>;
  constructor( private _articleService: ArticleService) {
    this.sources = _articleService.sources;
  }

  ngOnInit() {
    this._articleService.getSources();
  }

}
