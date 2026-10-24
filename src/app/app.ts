import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Dashboard } from './pages/dashboard/dashboard';
import { Footer } from './components/footer/footer';
import { Registro } from './components/registro/registro';
import { Pasatiempos } from './components/pasatiempos/pasatiempos';

@Component({
  imports: [RouterOutlet, Header, Dashboard, Footer, Registro, Pasatiempos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('actividad-angular');
}
