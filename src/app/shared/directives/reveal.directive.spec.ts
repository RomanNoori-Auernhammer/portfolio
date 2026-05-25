import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RevealDirective } from './reveal.directive';

@Component({
  standalone: true,
  imports: [RevealDirective],
  template: `<div appReveal>content</div>`,
})
class TestComponent {}

describe('RevealDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestComponent] });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const dir = fixture.debugElement.query(By.directive(RevealDirective));
    expect(dir).toBeTruthy();
  });

  it('should show element immediately when already in viewport', () => {
    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 100, bottom: 200, left: 0, right: 100, width: 100, height: 100, x: 0, y: 100,
      toJSON: () => ({}),
    });

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.directive(RevealDirective)).nativeElement;

    expect(el.style.opacity).not.toBe('0');
    expect(el.classList).not.toContain('animate-fade-in-up');
  });

  it('should hide element when below viewport', () => {
    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 2000, bottom: 2100, left: 0, right: 100, width: 100, height: 100, x: 0, y: 2000,
      toJSON: () => ({}),
    });

    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.directive(RevealDirective)).nativeElement;

    expect(el.style.opacity).toBe('0');
  });
});
