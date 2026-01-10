
import { HttpClient, HttpContext } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { email, Field, form, required, submit } from '@angular/forms/signals';
import { USE_BASE_URL } from '@core/interceptors/http.interceptor.service';
import { TokenService } from '@core/services/token.service';
import type { User } from './user.interface';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Field],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly httpClient = inject(HttpClient);
  private readonly httpContext = new HttpContext().set(USE_BASE_URL, true);
  private readonly tokenService = inject(TokenService);
  private readonly router = inject(Router);
  
  protected readonly user = signal<User>({
    email: '',
    password: '',
  });

  protected readonly loginForm = form(this.user, (path) => {
    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Invalid email' });
    required(path.password, { message: 'Password is required' });
  });

  protected onSubmit(event: SubmitEvent) {
    event.preventDefault();

    submit(this.loginForm, async (f) => {
      console.info('Login data:', f());
      const emailVal = f.email().value();
      const passwordVal = f.password().value();

      try {
        const result = await firstValueFrom(
          this.httpClient.post<{ token: string }>('/users/login',
            { email: emailVal, password: passwordVal },
            { context: this.httpContext  }
          )
        );
        this.tokenService.setToken(result.token);
        f().reset();
        this.router.navigate(['/']);
        return undefined; // niente errori
      } catch (err: unknown) {
        console.error(err);
        return [
          {
            kind: 'server',
            field: f.email,
            message: (err as Error)?.message || 'Server error',
          },
        ];
      }
    });
  }
}
