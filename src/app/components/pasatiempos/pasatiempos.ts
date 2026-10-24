import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pasatiempos',
  imports: [ReactiveFormsModule],
  templateUrl: './pasatiempos.html',
  styleUrl: './pasatiempos.css'
})
export class Pasatiempos {
  formBuilder = inject(FormBuilder);

  pasatiemposForm = this.formBuilder.group({
    pasatiempos: this.formBuilder.array([this.formBuilder.control('')])
  });

  get pasatiempos() {
    return this.pasatiemposForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control(''));
  }
}