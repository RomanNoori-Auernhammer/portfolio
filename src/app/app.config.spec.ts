import { of } from 'rxjs';
import { initTranslations } from './app.config';

describe('initTranslations', () => {
  it('should call translate.use with the default language', async () => {
    const translate = {
      getDefaultLang: jest.fn().mockReturnValue('de'),
      use: jest.fn().mockReturnValue(of({})),
    } as any;

    await initTranslations(translate)();

    expect(translate.use).toHaveBeenCalledWith('de');
  });

  it('should fall back to "de" when no default language is set', async () => {
    const translate = {
      getDefaultLang: jest.fn().mockReturnValue(null),
      use: jest.fn().mockReturnValue(of({})),
    } as any;

    await initTranslations(translate)();

    expect(translate.use).toHaveBeenCalledWith('de');
  });

  it('should return a promise that resolves when translations are loaded', async () => {
    const translate = {
      getDefaultLang: jest.fn().mockReturnValue('de'),
      use: jest.fn().mockReturnValue(of({ key: 'value' })),
    } as any;

    const result = await initTranslations(translate)();

    expect(result).toBeDefined();
  });
});
