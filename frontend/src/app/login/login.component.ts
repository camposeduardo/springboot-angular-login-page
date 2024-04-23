import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService) {}

  onSubmitSignIn(signInForm: NgForm) {
    this.authService.login(signInForm.value.email, signInForm.value.password).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  onSubmitRegister(registerForm: NgForm) {
    this.authService.register(registerForm.value).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
