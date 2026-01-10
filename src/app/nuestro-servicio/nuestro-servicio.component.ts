import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';




@Component({
  selector: 'app-nuestro-servicio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nuestro-servicio.component.html',
  styleUrl: './nuestro-servicio.component.css',
   animations: [
    trigger('tabAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('400ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        )
      ])
    ])
  ]
})
export class NuestroServicioComponent {

  menuAbierto = false;


  constructor(private router: Router) {}

    home(): void {
    this.router.navigate(['/home']);
  }

    activeTab: string = 'home';

  changeTab(tab: string): void {
    this.activeTab = tab;
  }


}
