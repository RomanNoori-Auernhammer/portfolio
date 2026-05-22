import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home.component').then((m) => m.HomeComponent),
    title: 'Roman Noori-Auernhammer | Software Engineer',
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog-list-page.component').then((m) => m.BlogListPageComponent),
    title: 'Blog | Roman Noori-Auernhammer',
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog-post.component').then((m) => m.BlogPostComponent),
    title: 'Blog | Roman Noori-Auernhammer',
  },
  {
    path: 'imprint',
    loadComponent: () => import('./features/legal.component').then((m) => m.LegalComponent),
    data: { type: 'imprint' },
    title: 'Impressum | Roman Noori-Auernhammer',
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/legal.component').then((m) => m.LegalComponent),
    data: { type: 'privacy' },
    title: 'Datenschutz | Roman Noori-Auernhammer',
  },
  { path: '**', redirectTo: '' },
];
