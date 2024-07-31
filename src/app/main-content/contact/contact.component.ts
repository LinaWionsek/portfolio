import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  onChange(event: Event): void {
    console.log((event.target as HTMLInputElement).checked);
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest = false;

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      // debugger;
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
