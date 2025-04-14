import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-multiple-ingredients-directions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-multiple-ingredients-directions.component.html',
  styleUrl: './add-multiple-ingredients-directions.component.css'
})
export class AddMultipleIngredientsDirectionsComponent {
  title!: string;
  enteredSummary!: string;
  enteredDescription!: string;

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  onSubmit() {

  }
}
