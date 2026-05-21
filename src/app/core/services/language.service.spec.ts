import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let translateService: TranslateService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [LanguageService],
    });
    service = TestBed.inject(LanguageService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to German', () => {
    expect(service.currentLang()).toBe('de');
  });

  describe('getInitialLanguage', () => {
    it('should return stored language', () => {
      localStorage.setItem('preferred-language', 'en');
      const result = service.getInitialLanguage();
      expect(result).toBe('en');
      expect(service.currentLang()).toBe('en');
    });

    it('should detect German from browser', () => {
      Object.defineProperty(navigator, 'language', { value: 'de-DE', configurable: true });
      const result = service.getInitialLanguage();
      expect(result).toBe('de');
    });

    it('should fall back to English for non-German browsers', () => {
      Object.defineProperty(navigator, 'language', { value: 'fr-FR', configurable: true });
      const result = service.getInitialLanguage();
      expect(result).toBe('en');
    });

    it('should ignore invalid stored values', () => {
      localStorage.setItem('preferred-language', 'fr');
      const result = service.getInitialLanguage();
      expect(['de', 'en']).toContain(result);
    });
  });

  describe('switchLanguage', () => {
    it('should set the language signal', () => {
      service.switchLanguage('en');
      expect(service.currentLang()).toBe('en');
    });

    it('should call translate.use', () => {
      const spy = jest.spyOn(translateService, 'use');
      service.switchLanguage('en');
      expect(spy).toHaveBeenCalledWith('en');
    });

    it('should persist to localStorage', () => {
      service.switchLanguage('en');
      expect(localStorage.getItem('preferred-language')).toBe('en');
    });

    it('should update document lang attribute', () => {
      service.switchLanguage('en');
      expect(document.documentElement.getAttribute('lang')).toBe('en');
    });
  });

  describe('toggle', () => {
    it('should switch from de to en', () => {
      service.switchLanguage('de');
      service.toggle();
      expect(service.currentLang()).toBe('en');
    });

    it('should switch from en to de', () => {
      service.switchLanguage('en');
      service.toggle();
      expect(service.currentLang()).toBe('de');
    });
  });
});
