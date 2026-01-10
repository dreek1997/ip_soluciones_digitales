import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  menuAbierto = false;


  contactoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  home(): void {
    this.router.navigate(['/home']);
  }

 enviarFormulario() {
  if (this.contactoForm.valid) {

    const { nombre, email, telefono, mensaje } = this.contactoForm.value;

    const numeroWhatsApp = '573113443891';
    // 👉 Reemplaza por tu número con código de país (Colombia = 57)

    const texto = `
Hola, mi nombre es ${nombre}.
Correo: ${email}
Teléfono: ${telefono || 'No proporcionado'}

Mensaje:
${mensaje}
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    this.contactoForm.reset();
  } else {
    this.contactoForm.markAllAsTouched();
  }
}

}
