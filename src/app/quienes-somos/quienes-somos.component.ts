import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  menuAbierto = false;


  constructor(private router: Router) {}

    home(): void {
    this.router.navigate(['/home']);
  }

}
