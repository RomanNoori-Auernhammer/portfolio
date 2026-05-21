import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home.component').then((m) => m.HomeComponent),
    title: 'Roman Noori-Auernhammer | Software Engineer',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about-page.component').then((m) => m.AboutPageComponent),
    title: 'Über mich | Roman Noori-Auernhammer',
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio-page.component').then((m) => m.PortfolioPageComponent),
    title: 'Portfolio | Roman Noori-Auernhammer',
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
