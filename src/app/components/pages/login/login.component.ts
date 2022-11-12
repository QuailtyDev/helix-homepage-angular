import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@servicesint/auth.service';
import { UserService } from '@servicesint/user.service';
import { UtilsService } from '@servicesint/utils.service';
import { CoreMessages, PASSWORD_VALIDATION_REGEX, SystemMessages } from 'src/app/constants/constants';
import { SIGNUP } from 'src/app/constants/navigation-paths';

@Component({
  selector: 'mot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasErrors: boolean;
  errors: Array<string> = [];
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      txtEmail: ['', [Validators.required, Validators.email]],
      txtPassword: [
        '',
        [Validators.required, Validators.minLength(5), Validators.pattern(new RegExp(PASSWORD_VALIDATION_REGEX))],
      ],
    });
  }

  onPasswordKeyUp() {
    this.errors = [];
    this.hasErrors = false;
  }

  submitForm(formValues) {
    this.errors = [];
    this.hasErrors = false;
    this.authService.loginUser(formValues.txtEmail, formValues.txtPassword).subscribe({
      next: () => {},
      error: (errorMessage) => {
        this.hasErrors = true;
        const errorFound = UtilsService.checkKey(CoreMessages, errorMessage.error);
        if (errorFound) {
          this.errors.push(CoreMessages[errorFound]);
        } else {
          this.errors.push(SystemMessages.GENERIC_ERROR);
        }
      },
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  goSignUp() {
    this.router.navigate([SIGNUP]);
  }
}
