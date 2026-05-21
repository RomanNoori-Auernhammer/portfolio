import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../core/services/profile.service';
import { ContactService } from '../core/services/contact.service';
import { RevealDirective } from '../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-12" appReveal>
          <span class="badge">{{ 'contact.label' | translate }}</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            {{ 'contact.heading' | translate }}
          </h2>
          <p class="mt-4 text-lg text-ink-600 dark:text-ink-400">
            {{ 'contact.subheading' | translate }}
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <!-- Contact info -->
          <div class="lg:col-span-2 space-y-4" appReveal>
            <a [href]="'mailto:' + profile.personal.email"
               class="card flex items-center gap-4 group !p-5">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform" aria-hidden="true">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div class="min-w-0">
                <div class="text-xs uppercase tracking-wider text-ink-500">{{ 'contact.email' | translate }}</div>
                <div class="text-sm font-medium text-ink-900 dark:text-ink-100 break-all">{{ profile.personal.email }}</div>
              </div>
            </a>

            <a [href]="'tel:' + profile.personal.phone"
               class="card flex items-center gap-4 group !p-5">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform" aria-hidden="true">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <div class="text-xs uppercase tracking-wider text-ink-500">{{ 'contact.phone' | translate }}</div>
                <div class="text-sm font-medium text-ink-900 dark:text-ink-100">{{ profile.personal.phone }}</div>
              </div>
            </a>

            <div class="card flex items-center gap-4 !p-5">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500" aria-hidden="true">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <div class="text-xs uppercase tracking-wider text-ink-500">{{ 'contact.location' | translate }}</div>
                <div class="text-sm font-medium text-ink-900 dark:text-ink-100">{{ profile.personal.location }}</div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <form [formGroup]="form" (ngSubmit)="onSubmit()"
                class="lg:col-span-3 card !p-8" appReveal [revealDelay]="150" novalidate>
            <p class="text-xs text-ink-500 mb-6 leading-relaxed">
              {{ 'contact.formNote' | translate }}
            </p>

            <div class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-ink-800 dark:text-ink-200 mb-1.5">
                  {{ 'contact.form.name' | translate }} *
                </label>
                <input id="name" type="text" formControlName="name" autocomplete="name"
                       [attr.aria-invalid]="isInvalid('name')"
                       [attr.aria-describedby]="isInvalid('name') ? 'name-error' : null"
                       class="w-full px-4 py-2.5 rounded-lg
                              bg-white dark:bg-ink-950
                              border border-ink-300 dark:border-ink-700
                              text-ink-900 dark:text-ink-100
                              placeholder:text-ink-400
                              focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
                              transition-colors" />
                @if (isInvalid('name')) {
                  <p id="name-error" class="mt-1 text-xs text-red-500">{{ 'contact.errors.required' | translate }}</p>
                }
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-ink-800 dark:text-ink-200 mb-1.5">
                  {{ 'contact.form.email' | translate }} *
                </label>
                <input id="email" type="email" formControlName="email" autocomplete="email"
                       [attr.aria-invalid]="isInvalid('email')"
                       [attr.aria-describedby]="isInvalid('email') ? 'email-error' : null"
                       class="w-full px-4 py-2.5 rounded-lg
                              bg-white dark:bg-ink-950
                              border border-ink-300 dark:border-ink-700
                              text-ink-900 dark:text-ink-100
                              placeholder:text-ink-400
                              focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
                              transition-colors" />
                @if (isInvalid('email')) {
                  <p id="email-error" class="mt-1 text-xs text-red-500">{{ 'contact.errors.email' | translate }}</p>
                }
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-ink-800 dark:text-ink-200 mb-1.5">
                  {{ 'contact.form.subject' | translate }} *
                </label>
                <input id="subject" type="text" formControlName="subject"
                       [attr.aria-invalid]="isInvalid('subject')"
                       class="w-full px-4 py-2.5 rounded-lg
                              bg-white dark:bg-ink-950
                              border border-ink-300 dark:border-ink-700
                              text-ink-900 dark:text-ink-100
                              focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
                              transition-colors" />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-ink-800 dark:text-ink-200 mb-1.5">
                  {{ 'contact.form.message' | translate }} *
                </label>
                <textarea id="message" rows="5" formControlName="message"
                          [attr.aria-invalid]="isInvalid('message')"
                          class="w-full px-4 py-2.5 rounded-lg resize-y
                                 bg-white dark:bg-ink-950
                                 border border-ink-300 dark:border-ink-700
                                 text-ink-900 dark:text-ink-100
                                 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
                                 transition-colors"></textarea>
                @if (isInvalid('message')) {
                  <p class="mt-1 text-xs text-red-500">{{ 'contact.errors.minLength' | translate }}</p>
                }
              </div>

              <button type="submit" [disabled]="form.invalid" class="btn-primary w-full sm:w-auto">
                {{ 'contact.form.submit' | translate }}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

              @if (submitted()) {
                <p class="text-sm text-brand-600 dark:text-brand-400" role="status">
                  ✓ {{ 'contact.success' | translate }}
                </p>
              }
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  readonly profile = inject(ProfileService);
  readonly submitted = signal(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    this.contactService.send({
      name: value.name ?? '',
      email: value.email ?? '',
      subject: value.subject ?? '',
      message: value.message ?? '',
    });
    this.submitted.set(true);
    this.form.reset();
  }
}
