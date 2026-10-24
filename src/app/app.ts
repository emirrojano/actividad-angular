import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Dashboard, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('actividad-angular');
}
