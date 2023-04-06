import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3)] ],
      apellido: ['', [ Validators.required, Validators.minLength(3)] ],
      localizacion: this.formBuilder.group({
        ciudad: ['', [ Validators.required, Validators.minLength(3)] ],
        direccion: ['', [ Validators.required ]],
        objetivo: [''],
        peso: [''],
        altura: ['']
      }),
    });
  }

  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }


  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }

  get apellidoControl(): AbstractControl | null {
    return this.registerForm.get('apellido');
  }

  get apellidoControlIsInvalid(): boolean {
    return !!(this.apellidoControl?.invalid && this.apellidoControl.touched);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }

}
