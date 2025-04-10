import { Component } from '@angular/core';
import { CategoryCardsComponent } from "./category-cards/category-cards.component";

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CategoryCardsComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

}
