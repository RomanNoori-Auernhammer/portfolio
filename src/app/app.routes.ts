import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home.component').then((m) => m.HomeComponent),
    title: 'Roman Noori-Auernhammer | Software Engineer',
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
