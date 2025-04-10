import { Component } from '@angular/core';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent {
  types = "Soups";
  // ['Soups', 'Salads', 'Main Course', 'Desserts', 'Snacks'];
  title = "Pahadi Maggi"
  ratings = Math.floor(Math.random() * 300) + 100;
}
