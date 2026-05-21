export interface Experience {
  id: string;
  company: string;
  positionKey: string;
  startDate: string;
  endDate: string;
  current: boolean;
  descriptionKey: string;
  highlightKeys: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degreeKey: string;
  startDate: string;
  endDate: string;
  descriptionKey?: string;
}

export interface SkillCategory {
  id: string;
  nameKey: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  highlightKeys: string[];
}

export interface Certification {
  id: string;
  nameKey: string;
  date: string;
  current?: boolean;
}

export interface Language {
  nameKey: string;
  levelKey: string;
  proficiency: number;
}
