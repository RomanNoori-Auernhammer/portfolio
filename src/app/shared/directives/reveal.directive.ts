import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.05;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      return;
    }
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');

    if (!('IntersectionObserver' in window)) {
      this.trigger();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.trigger();
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: this.revealThreshold },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private trigger(): void {
    if (this.revealDelay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `${this.revealDelay}ms`);
    }
    this.renderer.addClass(this.el.nativeElement, 'animate-fade-in-up');
  }
}
