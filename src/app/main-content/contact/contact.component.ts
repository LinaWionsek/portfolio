import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  
  /**
   * Represents the data collected from a contact form.
   * @type {ContactData}
   */
  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest = false;

  /**
   * Configuration for POST request to send mail.
   * @type {PostConfig}
   */
  post = {
    endPoint: 'https://lina-wionsek.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission by sending a POST request to the specified endpoint.
   *
   * @param {NgForm} ngForm - The form object containing submission data and validation status.
   * @return {void}
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            console.log('response');
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.changesSaved();
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  /**
   * Scrolls the window to the top of the page with a smooth animation and removes any URL hash.
   *
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '';
  }

  /**
   * Triggers a slide-in animation on the success info container element.
   *
   */
  changesSaved() {
    let slideInAnimation = document.getElementById('success_info_container');
    if (slideInAnimation) {
      slideInAnimation.classList.remove('d-none', 'slide-out', 'slide-in');
      slideInAnimation.offsetHeight;
      slideInAnimation.classList.add('slide-in');
      setTimeout(function () {
        slideInAnimation.classList.remove('slide-out', 'slide-in');
        slideInAnimation.offsetHeight;
        slideInAnimation.classList.add('slide-out');
      }, 2500);
      setTimeout(function () {
        slideInAnimation.classList.add('d-none');
      }, 2900);
    }
  }
}
