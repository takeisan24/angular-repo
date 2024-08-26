import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      title: 'Post 1', content: 'Content of post 1'
    },
    {
      title: 'Post 2', content: 'Content of post 2'
    },
    {
      title: 'Post 3', content: 'Content of post 3'
    },
  ]
}
