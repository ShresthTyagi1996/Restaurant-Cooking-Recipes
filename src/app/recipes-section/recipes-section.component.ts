import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardCategoryComponent } from '../card-category/card-category.component';

@Component({
  selector: 'app-recipes-section',
  standalone: true,
  imports: [CardComponent, CardCategoryComponent],
  templateUrl: './recipes-section.component.html',
  styleUrl: './recipes-section.component.css'
})
export class RecipesSectionComponent {
  aString: string = "<i class=\"far fa-hat-chef\"></i>";
}
