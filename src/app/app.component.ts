import { Component, Input } from '@angular/core';
import { Article } from './article'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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









