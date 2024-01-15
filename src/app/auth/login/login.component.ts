import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // email: string = '';
  // password: string = '';
  loginForm: FormGroup | any;

  userCredentials = {
    email: 'user@gmail.com',
    password: 'user'
  }

  loginError: string = '';

  constructor(private router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.loginError = '';
  }

  

  login() {
    console.log('logging in', this.loginForm.value.email, this.loginForm.value.password);
    // this.router.navigateByUrl('/register');
    if(this.loginForm.value.email == this.userCredentials.email && this.loginForm.value.password == this.userCredentials.password) {
      this.router.navigateByUrl('/home');
    } else {
      this.loginError = 'Please enter correct email or password';
    }
  }

}

