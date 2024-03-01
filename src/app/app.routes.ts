import { Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AllBooksComponent } from './components/pages/all-books/all-books.component';
import { SearchedBooksComponent } from './components/pages/searched-books/searched-books.component';
import { DescComponent } from './components/desc/desc.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                title: 'Zoe | Home',
                component: AllBooksComponent, 
            },
            {
                path: '',
                title: 'Search - Books',
                component: SearchedBooksComponent,
                pathMatch: 'full', 
            },
            {
              path: 'book/:id',
              title: 'Zoe | Descrição',
              component: DescComponent,
            },
            {
              path: 'profile',
              title: 'Zoe | Perfil',
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
