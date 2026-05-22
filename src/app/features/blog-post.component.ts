import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BlogService } from '../core/services/blog.service';
import { BlogPost } from '../core/models/blog.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-padding">
      <div class="container-custom max-w-3xl mx-auto">
        <a routerLink="/" fragment="blog"
           class="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-brand-500 transition-colors mb-10">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Zurück zum Blog
        </a>

        @if (post(); as p) {
          <article>
            <header class="mb-10">
              <time class="font-mono text-xs text-ink-500 dark:text-ink-400">
                {{ p.date | date: 'dd. MMMM yyyy' : '' : 'de' }}
              </time>
              <h1 class="font-display text-3xl sm:text-4xl font-bold text-ink-900 dark:text-ink-50 mt-3 leading-tight">
                {{ p.title }}
              </h1>
            </header>
            <div class="prose prose-ink dark:prose-invert max-w-none"
                 [innerHTML]="safeContent()"></div>
          </article>
        }
      </div>
    </div>
  `,
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly post = signal<BlogPost | null>(null);
  readonly safeContent = signal<SafeHtml>('');

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.blogService.getPost(slug).subscribe((post) => {
      this.post.set(post);
      this.safeContent.set(this.sanitizer.bypassSecurityTrustHtml(post.content ?? ''));
    });
  }
}
