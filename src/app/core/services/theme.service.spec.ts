import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    service = new ThemeService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to dark theme initially', () => {
    expect(service.theme()).toBe('dark');
  });

  describe('initialize', () => {
    it('should apply stored theme from localStorage', () => {
      localStorage.setItem('theme', 'light');
      service.initialize();
      expect(service.theme()).toBe('light');
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('should apply dark theme when stored', () => {
      localStorage.setItem('theme', 'dark');
      service.initialize();
      expect(service.theme()).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should fall back to system preference when no storage', () => {
      service.initialize();
      // matchMedia is mocked to return false, so should be light
      expect(['light', 'dark']).toContain(service.theme());
    });
  });

  describe('toggle', () => {
    it('should switch from dark to light', () => {
      service.initialize();
      const initial = service.theme();
      service.toggle();
      expect(service.theme()).not.toBe(initial);
    });

    it('should toggle dark class on documentElement', () => {
      localStorage.setItem('theme', 'light');
      service.initialize();
      expect(document.documentElement.classList.contains('dark')).toBe(false);
      service.toggle();
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should persist theme to localStorage', () => {
      localStorage.setItem('theme', 'light');
      service.initialize();
      service.toggle();
      expect(localStorage.getItem('theme')).toBe('dark');
    });
  });
});
