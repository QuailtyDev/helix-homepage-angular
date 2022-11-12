import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedComponentsModule } from '../../shared/shared-components.module';
import { AuthService } from '@servicesint/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    SharedComponentsModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [AuthService],
})
export class LoginModule {}
