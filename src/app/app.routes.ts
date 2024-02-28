import { Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AllBooksComponent } from './components/pages/all-books/all-books.component';
import { SearchedBooksComponent } from './components/pages/searched-books/searched-books.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                title: 'Book',
                component: AllBooksComponent, 
            },
            {
                path: '',
                title: 'Search - Books',
                component: SearchedBooksComponent,
                pathMatch: 'full', 
            },
            {
              path: 'profile',
              title: 'Profile',
              component: ProfileComponent,
            },
          ],
        },
        {
          path: 'login',
          title: 'Login',
          component: LoginComponent,
        },
        {
          path: 'register',
          title: 'Register',
          component: RegisterComponent,
        },
];
