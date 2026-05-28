import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { BlogService } from '../core/services/blog.service';
import { BlogPost } from '../core/models/blog.model';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [RouterLink, TranslateModule, DatePipe, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="blog" class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16" appReveal>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {{ 'blog.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'blog.subheading' | translate }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          @for (post of posts(); track post.slug; let i = $index) {
            <article appReveal [revealDelay]="i * 100"
              class="card group flex flex-col hover:border-brand-500/50 transition-colors cursor-pointer">
              <a [routerLink]="['/blog', post.slug]" class="flex flex-col flex-1">
                <time class="font-mono text-xs text-ink-500 dark:text-ink-400 mb-3">
                  {{ post.date | date: 'dd. MMMM yyyy' : '' : 'de' }}
                </time>
                <h3 class="font-display text-lg font-bold text-ink-900 dark:text-ink-50
                           group-hover:text-brand-500 transition-colors mb-3 leading-snug">
                  {{ post.title }}
                </h3>
                <p class="text-sm text-ink-600 dark:text-ink-400 leading-relaxed flex-1">
                  {{ post.excerpt }}
                </p>
                <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-500">
                  {{ 'blog.readMore' | translate }}
                  <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </span>
              </a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class BlogSectionComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  readonly posts = signal<BlogPost[]>([]);

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((posts) => this.posts.set(posts));
  }
}
