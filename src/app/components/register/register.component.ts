import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  firstname= '';
  lastname='';
  email = '';
  password = '';
  role = 'USER';
  authService = inject(AuthService);
  router = inject(Router);

  register(event: Event) {
    event.preventDefault();
    console.log(`Register: ${this.firstname} / ${this.email} / ${this.password} `);

    this.authService
      .register({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        role: this.role
      })
      .subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/']);
        },
      );
  }
}
