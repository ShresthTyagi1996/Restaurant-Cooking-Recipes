import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  @Output() toggleCategory = new EventEmitter<boolean>();
  closeCategoriesPanel() {
    this.toggleCategory.emit(false); // Emit the event to close the categories panel
  }
}
