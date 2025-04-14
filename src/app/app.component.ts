import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from "./topnav/topnav.component";
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopnavComponent, RouterOutlet, FooterComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manju_Kitchen';
  toggleCategory !: boolean; // Initial state: closed

  switchingToggle(event: any) {
    this.toggleCategory = event;
  }

  toggleCategoryPanel(event: any) {
    this.toggleCategory = event;
  }
}
