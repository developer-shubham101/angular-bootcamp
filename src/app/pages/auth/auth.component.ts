import { Component, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  profileJson: string = '';
  token: string = '';

  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // Call the loginWithRedirect method on the injected authentication service
    // this.auth.loginWithRedirect();

    this.auth.user$.subscribe((profile) => {
      this.profileJson = JSON.stringify(profile, null, 2);
      
      this.auth.getAccessTokenSilently().subscribe((token) => {
        this.token = token;
      });
    });
    // Call the logout method on the injected authentication service
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        console.log('User is logged in');
      } else {
        console.log('User is not logged in');
      }
    });
  }

  copyToken(): void {
    navigator.clipboard.writeText(this.token).then(
      () => {
        console.log('Token copied to clipboard');
      },
      (err) => {
        console.error('Could not copy token: ', err);
      }
    );
  }
}
