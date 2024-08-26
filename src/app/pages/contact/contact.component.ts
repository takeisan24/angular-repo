import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('formAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(-50px)' }))
      ])
    ]
    ),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ]),
    ]),
  ],
})
export class ContactComponent{
  contactForm: FormGroup;
  successMessages: string = '';
  errorMessages: string = '';
  infoMessages: string = '';
  isFormVisible = true;
  showSuccessMessage = false;
  showErrorMessage = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]
    });
  }

  onSubmit(){
    if (this.contactForm.valid){
      this.showSuccessMessage = true;
      this.successMessages = 'Your message has been sent';
      this.errorMessages = '';
      this.infoMessages = '';
    } else {
      this.showErrorMessage = true;
      this.errorMessages = 'Please fill out the form';
      this.successMessages = '';
      this.infoMessages = '';
    }
    console.warn(this.contactForm.value);
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3000);
  }
  
  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }
}