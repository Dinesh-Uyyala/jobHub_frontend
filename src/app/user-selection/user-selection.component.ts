import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent {
  constructor(private router: Router) {}

  navigateTo(role: string) {
    this.router.navigate([`/register/${role}`]);
  }
}


