import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule], 
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  private fb = inject(FormBuilder);

  registroForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    direccion: this.fb.group({
      calle: [''],
      ciudad: ['']
    })
  });

  onSubmit() {
    console.log('Valor del formulario:', this.registroForm.value);
  }

  cargarDireccionDePrueba() {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Colón 1234',
        ciudad: 'Córdoba'
      }
    });
  }
}