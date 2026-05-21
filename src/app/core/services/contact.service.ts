import { Injectable } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly recipientEmail = 'r.noori.auernhammer@gmail.com';

  buildMailtoUrl(data: ContactMessage): string {
    const subject = encodeURIComponent(`[Portfolio] ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `E-Mail: ${data.email}\n\n` +
      `Nachricht:\n${data.message}\n\n` +
      `---\nGesendet über das Kontaktformular auf der Portfolio-Website.`,
    );
    return `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;
  }

  send(data: ContactMessage): void {
    window.location.href = this.buildMailtoUrl(data);
  }

  getRecipientEmail(): string {
    return this.recipientEmail;
  }
}
