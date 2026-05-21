import { Injectable } from '@angular/core';
import {
  Certification, Education, Experience, Language, Project, SkillCategory,
} from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  readonly personal = {
    name: 'Roman Noori-Auernhammer',
    location: 'Schwabach, Deutschland',
    email: 'r.noori.auernhammer@gmail.com',
    phone: '+49 178 8050054',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  };

  readonly experiences: Experience[] = [
    {
      id: 'datev-fullstack',
      company: 'DATEV eG',
      positionKey: 'experience.datev.position',
      startDate: '2024-02',
      endDate: '2026-02',
      current: false,
      descriptionKey: 'experience.datev.description',
      highlightKeys: [
        'experience.datev.h1', 'experience.datev.h2', 'experience.datev.h3',
        'experience.datev.h4', 'experience.datev.h5', 'experience.datev.h6',
        'experience.datev.h7',
      ],
      technologies: [
        'Angular', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot',
        'PostgreSQL', 'JUnit', 'Mockito', 'Jest', 'Cypress', 'SonarQube',
        'Cloud Foundry', 'GitLab CI/CD',
      ],
    },
  ];

  readonly education: Education[] = [
    {
      id: 'ihk',
      institution: 'DATEV eG',
      degreeKey: 'education.ihk.degree',
      startDate: '2020-09',
      endDate: '2024-02',
      descriptionKey: 'education.ihk.description',
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      id: 'frontend', nameKey: 'skills.frontend', icon: 'frontend',
      skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Jest', 'Cypress'],
    },
    {
      id: 'backend', nameKey: 'skills.backend', icon: 'backend',
      skills: ['Java', 'Spring Boot', 'JUnit', 'Mockito', 'PostgreSQL', 'REST APIs'],
    },
    {
      id: 'devops', nameKey: 'skills.devops', icon: 'devops',
      skills: ['Git', 'GitLab', 'GitHub', 'CI/CD', 'Cloud Foundry', 'Jenkins', 'Docker', 'Linux', 'Vercel'],
    },
    {
      id: 'tooling', nameKey: 'skills.tooling', icon: 'tooling',
      skills: ['SonarQube', 'IntelliJ', 'VS Code', 'Postman', 'Confluence', 'Azure DevOps'],
    },
    {
      id: 'ai', nameKey: 'skills.ai', icon: 'ai',
      skills: ['GitHub Copilot', 'Claude Code', 'ChatGPT', 'Cursor', 'Codeium'],
    },
    {
      id: 'methods', nameKey: 'skills.methods', icon: 'methods',
      skills: ['Scrum', 'TDD', 'Clean Code', 'Code Reviews', 'Pair Programming', 'Mob Programming'],
    },
  ];

  readonly projects: Project[] = [
    {
      id: 'notification-platform',
      titleKey: 'projects.notification.title',
      descriptionKey: 'projects.notification.description',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Cypress'],
      highlightKeys: [
        'projects.notification.h1', 'projects.notification.h2', 'projects.notification.h3',
      ],
    },
    {
      id: 'kanzlei',
      titleKey: 'projects.kanzlei.title',
      descriptionKey: 'projects.kanzlei.description',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Cloud Foundry'],
      highlightKeys: ['projects.kanzlei.h1', 'projects.kanzlei.h2'],
    },
    {
      id: 'gitlab-bot',
      titleKey: 'projects.gitlab.title',
      descriptionKey: 'projects.gitlab.description',
      technologies: ['GitLab API', 'CI/CD', 'Automation'],
      highlightKeys: ['projects.gitlab.h1', 'projects.gitlab.h2'],
    },
  ];

  readonly certifications: Certification[] = [
    { id: 'docker', nameKey: 'certs.docker', date: '2026-04', current: true },
    { id: 'angular', nameKey: 'certs.angular', date: '2025-12' },
    { id: 'cypress', nameKey: 'certs.cypress', date: '2024-07' },
    { id: 'typescript', nameKey: 'certs.typescript', date: '2024-04' },
    { id: 'aws', nameKey: 'certs.aws', date: '2023-06' },
    { id: 'cn2', nameKey: 'certs.cn2', date: '2022-11' },
    { id: 'cn1', nameKey: 'certs.cn1', date: '2022-10' },
  ];

  readonly languages: Language[] = [
    { nameKey: 'languages.persian', levelKey: 'languages.native', proficiency: 5 },
    { nameKey: 'languages.german', levelKey: 'languages.c1', proficiency: 5 },
    { nameKey: 'languages.english', levelKey: 'languages.b2', proficiency: 4 },
  ];
}
