import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation() {
    return of({});
  }
}

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: MockTranslateLoader } }),
      ],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();
  });

  it('should render all four sections', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-hero-section'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-projects-section'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-about-section'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-skills-section'))).toBeTruthy();
  });

  it('should render sections in the correct order: hero → projects → about → skills', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const selectors = ['app-hero-section', 'app-projects-section', 'app-about-section', 'app-skills-section'];
    const elements = selectors.map(
      (sel) => fixture.debugElement.query(By.css(sel))?.nativeElement as HTMLElement
    );

    for (let i = 0; i < elements.length - 1; i++) {
      const follows = elements[i].compareDocumentPosition(elements[i + 1]) & Node.DOCUMENT_POSITION_FOLLOWING;
      expect(follows).toBeTruthy();
    }
  });
});
