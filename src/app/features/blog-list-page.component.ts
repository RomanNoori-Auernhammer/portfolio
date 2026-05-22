import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService } from '../core/services/blog.service';
import { BlogPost } from '../core/models/blog.model';

@Component({
  selector: 'app-blog-list-page',
  standalone: true,
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-padding">
      <div class="container-custom max-w-4xl mx-auto">

        <div class="max-w-2xl mb-16">
          <span class="badge">Blog</span>
          <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Aus meiner Praxis
          </h1>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            Womit ich mich beschäftige — Erfahrungen, Learnings und Gedanken aus dem Entwickleralltag.
          </p>
        </div>

        <div class="space-y-6">
          @for (post of posts(); track post.slug) {
            <article>
              <a [routerLink]="['/blog', post.slug]"
                 class="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl
                        border border-ink-200 dark:border-ink-800
                        bg-white dark:bg-ink-900
                        hover:border-brand-500/60 hover:shadow-lg hover:shadow-brand-500/5
                        transition-all duration-200">

                <div class="flex-shrink-0 flex items-center justify-center
                            h-16 w-16 rounded-xl
                            bg-gradient-to-br from-brand-500/20 to-brand-500/5
                            text-brand-500 group-hover:scale-105 transition-transform">
                  <svg class="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>

                <div class="flex-1 min-w-0">
                  <time class="font-mono text-xs text-ink-400 dark:text-ink-500">
                    {{ post.date | date: 'dd. MMMM yyyy' : '' : 'de' }}
                  </time>
                  <h2 class="font-display text-xl font-bold text-ink-900 dark:text-ink-50
                             group-hover:text-brand-500 transition-colors mt-1 mb-2 leading-snug">
                    {{ post.title }}
                  </h2>
                  <p class="text-sm text-ink-600 dark:text-ink-400 leading-relaxed line-clamp-2">
                    {{ post.excerpt }}
                  </p>
                </div>

                <div class="flex items-center self-center shrink-0 text-brand-500">
                  <svg class="h-5 w-5 transition-transform group-hover:translate-x-1"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>

              </a>
            </article>
          }
        </div>

      </div>
    </div>
  `,
})
export class BlogListPageComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  readonly posts = signal<BlogPost[]>([]);

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((posts) => this.posts.set(posts));
  }
}
