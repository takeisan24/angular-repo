import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  webName = 'Thực tập Web';
  name = 'Vũ Tuấn Anh';
  src = 'https://i.pinimg.com/236x/31/51/1b/31511bac3092c67883c4e79569327586.jpg';
  srcImage = 'https://i.pinimg.com/236x/bc/59/ae/bc59ae01d38c2847848064dfc3519a78.jpg';
  altImage = 'Ảnh minh họa';
  changedImage = 'https://i.pinimg.com/236x/34/ab/56/34ab56c4189d19c5c98720a712b34fb3.jpg';
  changedImg = false;
  srcIcon = this.src;
  altIcon = this.altImage;
  link = './todo-list/todo-list.component.html';
  change(){
    if(!this.changedImg){
      this.src = this.changedImage;
      this.srcIcon = this.src
      this.changedImg = true;
    }else{ 
      this.src = this.srcImage;
      this.srcIcon = this.src
      this.changedImg = false;
    }
  }
  socialList = [
    {
      name:'Facebook', link:""
    },
    {
      name:'Instagram', link:""
    },
    {
      name:'Tik Tok', link:""
    },
    {
      name:'Discord', link:""
    },
  ]
  footer = '©2024 From Takei with love';
}