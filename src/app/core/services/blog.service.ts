import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, lastValueFrom, switchMap } from 'rxjs';
import { marked } from 'marked';
import { BlogPost } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly http = inject(HttpClient);

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/assets/blog/index.json');
  }

  getPost(slug: string): Observable<BlogPost> {
    return this.getPosts().pipe(
      switchMap((posts) => {
        const meta = posts.find((p) => p.slug === slug);
        if (!meta) throw new Error(`Post not found: ${slug}`);
        return from(
          lastValueFrom(this.http.get(`/assets/blog/${slug}.md`, { responseType: 'text' }))
            .then(async (md) => ({ ...meta, content: await marked(md) }))
        );
      }),
    );
  }
}
