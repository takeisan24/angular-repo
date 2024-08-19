import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterOutlet, AppComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

}
