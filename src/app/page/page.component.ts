import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  constructor(private router: Router) {}

  menuAbierto = false;


    home(): void {
    this.router.navigate(['/home']);
  }
}
