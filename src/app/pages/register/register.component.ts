import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faLock,
  faUserCircle,
  faEnvelope, 
  faFlagUsa, 
  faIdCard 
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { RegisterVM } from '../../services/auth/vm/register-vm.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  title = 'registerPage';
  public registerForm!: FormGroup;
  errorMessage: string = '';
  public faUserCircle = faUserCircle;
  public faBars = faBars;
  public faLock = faLock;
  faEnvelope = faEnvelope;
  faFlagUsa = faFlagUsa;
  faIdCard = faIdCard;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form group with form controls and validators
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      cin: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{6,}$')]] // Example pattern
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const registerData: RegisterVM = this.registerForm.value;
      
      this.authService.register(registerData).subscribe({
        next: (response) => {
          // Redirect to verification page or show success message
          this.router.navigate(['/verify'], { 
            queryParams: { email: response.email } 
          });
        },
        error: (err) => {
          // Handle registration error
          this.errorMessage = err.error || 'Registration failed. Please try again.';
        }
      });
    }
  }
}
