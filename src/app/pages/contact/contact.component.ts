import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{
  contactForm: FormGroup;
  successMessages: string = '';
  errorMessages: string = '';
  infoMessages: string = '';
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]
    });
  }

  onSubmit(){
    if (this.contactForm.valid){
      this.successMessages = 'Your message has been sent';
      this.errorMessages = '';
      this.infoMessages = '';
    } else {
      this.errorMessages = 'Please fill out the form';
      this.successMessages = '';
      this.infoMessages = '';
    }
  }
}
