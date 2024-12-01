import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faLock,
  faUserCircle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  title = 'loginPage';
  public faUserCircle = faUserCircle;
  public faBars = faBars;
  public faLock = faLock;
  public faEnvelope = faEnvelope;
}
