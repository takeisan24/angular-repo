import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: 'app',
        component: AppComponent
    },
    {
        path: 'todo-list',
        component: TodoListComponent
    },
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // },
];
