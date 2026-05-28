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

    it('should have a phone number', () => {
      expect(service.personal.phone).toMatch(/^\+\d+/);
    });

    it('should have linkedin and xing urls', () => {
      expect(service.personal.linkedin).toMatch(/^https?:\/\//);
      expect(service.personal.xing).toMatch(/^https?:\/\//);
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

});
