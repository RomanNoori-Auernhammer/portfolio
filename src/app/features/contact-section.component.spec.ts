import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactSectionComponent } from './contact-section.component';
import { ContactService } from '../core/services/contact.service';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;
  let contactService: ContactService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactSectionComponent,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    contactService = TestBed.inject(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form initially', () => {
    expect(component.form.invalid).toBe(true);
  });

  it('should require name, email, subject, and message', () => {
    const form = component.form;
    expect(form.get('name')?.hasError('required')).toBe(true);
    expect(form.get('email')?.hasError('required')).toBe(true);
    expect(form.get('subject')?.hasError('required')).toBe(true);
    expect(form.get('message')?.hasError('required')).toBe(true);
  });

  it('should require a valid email format', () => {
    component.form.patchValue({ email: 'invalid' });
    expect(component.form.get('email')?.hasError('email')).toBe(true);
    component.form.patchValue({ email: 'valid@example.com' });
    expect(component.form.get('email')?.hasError('email')).toBe(false);
  });

  it('should require message of at least 10 characters', () => {
    component.form.patchValue({ message: 'too short' });
    expect(component.form.get('message')?.hasError('minlength')).toBe(true);
    component.form.patchValue({ message: 'This is a sufficiently long message.' });
    expect(component.form.get('message')?.hasError('minlength')).toBe(false);
  });

  it('should be valid with all fields filled correctly', () => {
    component.form.patchValue({
      name: 'Max Mustermann',
      email: 'max@example.com',
      subject: 'Interesse',
      message: 'Hier ist meine ausführliche Nachricht.',
    });
    expect(component.form.valid).toBe(true);
  });

  describe('isInvalid', () => {
    it('should return false for untouched invalid fields', () => {
      expect(component.isInvalid('name')).toBe(false);
    });

    it('should return true for touched invalid fields', () => {
      const control = component.form.get('name');
      control?.markAsTouched();
      expect(component.isInvalid('name')).toBe(true);
    });

    it('should return false for valid fields', () => {
      const control = component.form.get('name');
      control?.setValue('Valid Name');
      control?.markAsTouched();
      expect(component.isInvalid('name')).toBe(false);
    });
  });

  describe('onSubmit', () => {
    it('should not call contactService.send when form is invalid', () => {
      const spy = jest.spyOn(contactService, 'send');
      component.onSubmit();
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call contactService.send when form is valid', () => {
      const spy = jest.spyOn(contactService, 'send').mockImplementation(() => undefined);
      component.form.patchValue({
        name: 'Max', email: 'max@example.com',
        subject: 'Hey', message: 'Sufficient length here.',
      });
      component.onSubmit();
      expect(spy).toHaveBeenCalledWith({
        name: 'Max',
        email: 'max@example.com',
        subject: 'Hey',
        message: 'Sufficient length here.',
      });
    });

    it('should mark all controls as touched when submitting invalid form', () => {
      component.onSubmit();
      expect(component.form.get('name')?.touched).toBe(true);
    });

    it('should set submitted to true after successful submit', () => {
      jest.spyOn(contactService, 'send').mockImplementation(() => undefined);
      component.form.patchValue({
        name: 'Max', email: 'max@example.com',
        subject: 'Hey', message: 'Sufficient length here.',
      });
      component.onSubmit();
      expect(component.submitted()).toBe(true);
    });

    it('should reset the form after successful submit', () => {
      jest.spyOn(contactService, 'send').mockImplementation(() => undefined);
      component.form.patchValue({
        name: 'Max', email: 'max@example.com',
        subject: 'Hey', message: 'Sufficient length here.',
      });
      component.onSubmit();
      expect(component.form.get('name')?.value).toBeNull();
    });
  });
});
