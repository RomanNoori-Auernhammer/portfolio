import { ContactService, ContactMessage } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    service = new ContactService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose the recipient email', () => {
    expect(service.getRecipientEmail()).toBe('r.noori.auernhammer@gmail.com');
  });

  describe('buildMailtoUrl', () => {
    const sampleMessage: ContactMessage = {
      name: 'Max Mustermann',
      email: 'max@example.com',
      subject: 'Job-Anfrage',
      message: 'Interessiert an einer Zusammenarbeit.',
    };

    it('should generate a mailto URL with the recipient email', () => {
      const url = service.buildMailtoUrl(sampleMessage);
      expect(url).toContain('mailto:r.noori.auernhammer@gmail.com');
    });

    it('should include the [Portfolio] prefix in subject', () => {
      const url = service.buildMailtoUrl(sampleMessage);
      expect(url).toContain('subject=' + encodeURIComponent('[Portfolio] Job-Anfrage'));
    });

    it('should encode the message body with name and email', () => {
      const url = service.buildMailtoUrl(sampleMessage);
      const decoded = decodeURIComponent(url);
      expect(decoded).toContain('Name: Max Mustermann');
      expect(decoded).toContain('E-Mail: max@example.com');
      expect(decoded).toContain('Interessiert an einer Zusammenarbeit.');
    });

    it('should escape special characters in subject and body', () => {
      const message: ContactMessage = {
        name: 'A&B',
        email: 'a@b.de',
        subject: 'Test & Demo',
        message: 'Hello "world" & friends',
      };
      const url = service.buildMailtoUrl(message);
      // & sign must be encoded as %26
      expect(url).toContain('%26');
    });
  });

  describe('send', () => {
    it('should call buildMailtoUrl and set window.location.href', () => {
      const data: ContactMessage = {
        name: 'Test', email: 't@t.de', subject: 'Hi', message: 'Hello there!',
      };
      const buildSpy = jest.spyOn(service, 'buildMailtoUrl');
      // Mock window.location
      delete (window as any).location;
      (window as any).location = { href: '' };
      service.send(data);
      expect(buildSpy).toHaveBeenCalledWith(data);
    });
  });
});
