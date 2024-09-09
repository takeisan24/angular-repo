import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { BlogComponent } from './pages/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    },
    {
        path: 'sidebar',
        component: SidebarComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
