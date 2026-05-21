import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(() => {
    service = new ProfileService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('personal info', () => {
    it('should have the correct name', () => {
      expect(service.personal.name).toBe('Roman Noori-Auernhammer');
    });

    it('should have an email', () => {
      expect(service.personal.email).toMatch(/^[^@]+@[^.]+\..+$/);
    });

    it('should have a location', () => {
      expect(service.personal.location).toContain('Schwabach');
    });
  });

  describe('experiences', () => {
    it('should contain at least one experience', () => {
      expect(service.experiences.length).toBeGreaterThan(0);
    });

    it('should have DATEV as employer in the most recent experience', () => {
      const datev = service.experiences.find((e) => e.id === 'datev-fullstack');
      expect(datev).toBeDefined();
      expect(datev?.company).toBe('DATEV eG');
    });

    it('should have technologies for each experience', () => {
      service.experiences.forEach((exp) => {
        expect(exp.technologies.length).toBeGreaterThan(0);
      });
    });

    it('should have highlight keys for each experience', () => {
      service.experiences.forEach((exp) => {
        expect(exp.highlightKeys.length).toBeGreaterThan(0);
      });
    });
  });

  describe('education', () => {
    it('should contain at least 1 entry', () => {
      expect(service.education.length).toBeGreaterThanOrEqual(1);
    });

    it('should include the IHK-Fachinformatiker training', () => {
      const ihk = service.education.find((e) => e.id === 'ihk');
      expect(ihk).toBeDefined();
    });
  });

  describe('skills', () => {
    it('should have 6 skill categories', () => {
      expect(service.skillCategories.length).toBe(6);
    });

    it('should include Angular in the frontend category', () => {
      const frontend = service.skillCategories.find((c) => c.id === 'frontend');
      expect(frontend?.skills).toContain('Angular');
    });

    it('should include Java in the backend category', () => {
      const backend = service.skillCategories.find((c) => c.id === 'backend');
      expect(backend?.skills).toContain('Java');
    });
  });

  describe('projects', () => {
    it('should have at least 3 projects', () => {
      expect(service.projects.length).toBeGreaterThanOrEqual(3);
    });

    it('should have an id, title key and technologies for each project', () => {
      service.projects.forEach((p) => {
        expect(p.id).toBeTruthy();
        expect(p.titleKey).toBeTruthy();
        expect(p.technologies.length).toBeGreaterThan(0);
      });
    });
  });

  describe('certifications', () => {
    it('should have at least one current certification', () => {
      const current = service.certifications.filter((c) => c.current);
      expect(current.length).toBeGreaterThan(0);
    });

    it('should be sorted from newest to oldest', () => {
      const dates = service.certifications.map((c) => c.date);
      const sorted = [...dates].sort().reverse();
      expect(dates).toEqual(sorted);
    });
  });

  describe('languages', () => {
    it('should include all three languages', () => {
      expect(service.languages.length).toBe(3);
    });

    it('should have a proficiency between 1 and 5 for each language', () => {
      service.languages.forEach((lang) => {
        expect(lang.proficiency).toBeGreaterThanOrEqual(1);
        expect(lang.proficiency).toBeLessThanOrEqual(5);
      });
    });
  });
});
