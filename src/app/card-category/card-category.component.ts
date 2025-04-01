import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {
  @Input({ required: true }) imageURL: string = "";
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) rating: string = "0";
  @Input({ required: true }) ratingCount: string = "0";
  @Input({ required: true }) time: string = '';
  @Input({ required: true }) difficulty: string = '';
  @Input({ required: true }) description: string = '';
  @Input({ required: true }) category: string = '';

  getStars(): string[] {
    return Array(this.rating).fill("0");
  }
}
