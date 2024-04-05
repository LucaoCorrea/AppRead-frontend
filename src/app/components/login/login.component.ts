import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  authService = inject(AuthService);
  router = inject(Router);

  login(event: Event) {
    event.preventDefault();
    console.log(`Login: ${this.email} / ${this.password}`);

    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/']);
        },
      );
  }
}
