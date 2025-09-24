import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {Home } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';   
}
